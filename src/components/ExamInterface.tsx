import React, { useState, useEffect } from 'react';
import { Clock, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Question, ExamMode, UserAnswer, ExamResult } from '../types/exam';
import { QuestionCard } from './QuestionCard';
import { useTimer } from '../hooks/useTimer';

interface ExamInterfaceProps {
  questions: Question[];
  mode: ExamMode;
  onComplete: (result: ExamResult) => void;
  onBack: () => void;
}

export const ExamInterface: React.FC<ExamInterfaceProps> = ({
  questions,
  mode,
  onComplete,
  onBack
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const { timeLeft, isRunning, startTimer, formatTime } = useTimer(
    mode.timeLimit ? mode.timeLimit * 60 : 0,
    () => handleFinishExam()
  );

  useEffect(() => {
    if (mode.type === 'exam' && mode.timeLimit) {
      startTimer();
    }
    setQuestionStartTime(Date.now());
  }, [mode, startTimer]);

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestion]);

  const handleSelectAnswer = (answer: number) => {
    setSelectedAnswer(answer);
    
    if (mode.type === 'study') {
      setShowResult(true);
      saveAnswer(answer);
    }
  };

  const saveAnswer = (answer: number) => {
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    const userAnswer: UserAnswer = {
      questionId: questions[currentQuestion].id,
      selectedAnswer: answer,
      isCorrect: answer === questions[currentQuestion].correctAnswer,
      timeSpent
    };

    setAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === userAnswer.questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = userAnswer;
        return updated;
      }
      return [...prev, userAnswer];
    });
  };

  const handleNext = () => {
    if (mode.type === 'exam' && selectedAnswer !== null) {
      saveAnswer(selectedAnswer);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      handleFinishExam();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(curr => curr - 1);
      const existingAnswer = answers.find(a => a.questionId === questions[currentQuestion - 1].id);
      setSelectedAnswer(existingAnswer ? existingAnswer.selectedAnswer : null);
      setShowResult(mode.type === 'study' && existingAnswer !== undefined);
    }
  };

  const handleFinishExam = () => {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const score = Math.round((correctAnswers / questions.length) * 100);

    const result: ExamResult = {
      mode: mode.type,
      totalQuestions: questions.length,
      correctAnswers,
      incorrectAnswers: questions.length - correctAnswers,
      score,
      timeSpent: totalTime,
      answers
    };

    onComplete(result);
  };

  const getAnsweredQuestions = () => {
    return answers.length;
  };

  const getProgressPercentage = () => {
    return (currentQuestion / questions.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-lg md:text-xl font-semibold text-gray-900">
                  {mode.type === 'study' ? 'Modo Estudio' : 'Modo Examen'}
                </h1>
                <p className="text-xs md:text-sm text-gray-500">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
              {mode.type === 'exam' && mode.timeLimit && (
                <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 md:px-3 py-1 md:py-2 rounded-lg">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                  <span className={`font-medium ${timeLeft < 300 ? 'text-red-600' : 'text-blue-600'}`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
              )}
              
              <div className="text-gray-500 whitespace-nowrap">
                Respondidas: {getAnsweredQuestions()}/{questions.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          showResult={showResult}
          mode={mode.type}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6 md:mt-8 gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </button>

          <div className="text-center hidden md:block">
            <p className="text-xs md:text-sm text-gray-500 mb-2">
              {currentQuestion + 1} de {questions.length} preguntas
            </p>
            {mode.type === 'exam' && (
              <p className="text-xs md:text-sm text-gray-400">
                Respondidas: {getAnsweredQuestions()} | Pendientes: {questions.length - getAnsweredQuestions()}
              </p>
            )}
          </div>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleFinishExam}
              disabled={mode.type === 'exam' && selectedAnswer === null}
              className="flex items-center gap-1 md:gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-4 md:px-6 py-2 rounded-lg transition-colors text-sm md:text-base"
            >
              <CheckCircle2 className="h-4 w-4" />
              Finalizar
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="flex items-center gap-1 md:gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};