import React, { useState } from 'react';
import { ModeSelector } from './components/ModeSelector';
import { StudyConfig } from './components/StudyConfig';
import { ExamConfig } from './components/ExamConfig';
import { ExamInterface } from './components/ExamInterface';
import { ExamReport } from './components/ExamReport';
import { ExamMode, ExamResult } from './types/exam';
import { questions } from './data/questions';
import { getRandomQuestions, getQuestionsByTopics, shuffleQuestionsWithOptions } from './utils/questionUtils';

type AppState = 'mode-selection' | 'study-config' | 'exam-config' | 'exam' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('mode-selection');
  const [selectedMode, setSelectedMode] = useState<ExamMode | null>(null);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState(questions);

  const handleSelectMode = (mode: ExamMode) => {
    if (mode.type === 'study') {
      // For study mode, go to configuration first
      setCurrentState('study-config');
    } else {
      // For exam mode, go to configuration first
      setCurrentState('exam-config');
    }
  };

  const handleStartStudy = (config: ExamMode) => {
    setSelectedMode(config);
    // Filter questions by selected topics and randomize
    const filteredQuestions = getQuestionsByTopics(questions, config.selectedTopics || []);
    setCurrentQuestions(shuffleQuestionsWithOptions(filteredQuestions));
    setCurrentState('exam');
  };

  const handleStartExam = (config: ExamMode) => {
    setSelectedMode(config);
    // Filter questions by selected topics and randomize
    const filteredQuestions = getQuestionsByTopics(questions, config.selectedTopics || []);
    setCurrentQuestions(shuffleQuestionsWithOptions(filteredQuestions));
    setCurrentState('exam');
  };

  const handleExamComplete = (result: ExamResult) => {
    setExamResult(result);
    setCurrentState('results');
  };

  const handleBackToModeSelection = () => {
    setCurrentState('mode-selection');
    setSelectedMode(null);
    setExamResult(null);
  };

  const handleBackToConfig = () => {
    if (selectedMode?.type === 'study') {
      setCurrentState('study-config');
    } else {
      setCurrentState('exam-config');
    }
  };

  const handleRetry = () => {
    if (selectedMode) {
      // Filter and randomize questions again for retry
      const filteredQuestions = getQuestionsByTopics(questions, selectedMode.selectedTopics || []);
      setCurrentQuestions(shuffleQuestionsWithOptions(filteredQuestions));
      setCurrentState('exam');
      setExamResult(null);
    }
  };

  if (currentState === 'mode-selection') {
    return <ModeSelector onSelectMode={handleSelectMode} />;
  }

  if (currentState === 'study-config') {
    return <StudyConfig onStartStudy={handleStartStudy} onBack={handleBackToModeSelection} />;
  }

  if (currentState === 'exam-config') {
    return <ExamConfig onStartExam={handleStartExam} onBack={handleBackToModeSelection} />;
  }

  if (currentState === 'exam' && selectedMode) {
    return (
      <ExamInterface
        questions={currentQuestions}
        mode={selectedMode}
        onComplete={handleExamComplete}
        onBack={handleBackToConfig}
      />
    );
  }

  if (currentState === 'results' && examResult) {
    return (
      <ExamReport
        result={examResult}
        questions={currentQuestions}
        onBack={handleBackToModeSelection}
        onRetry={handleRetry}
      />
    );
  }

  return null;
}

export default App;