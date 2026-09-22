import React from 'react';
import { CheckCircle, XCircle, Clock, BarChart3, ArrowLeft, RotateCcw } from 'lucide-react';
import { ExamResult, Question } from '../types/exam';

interface ExamReportProps {
  result: ExamResult;
  questions: Question[];
  onBack: () => void;
  onRetry: () => void;
}

export const ExamReport: React.FC<ExamReportProps> = ({ result, questions, onBack, onRetry }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return '¡Excelente! Demuestras un dominio excepcional de las normas de tránsito.';
    if (score >= 80) return '¡Muy bien! Tienes un buen conocimiento de las normas de tránsito.';
    if (score >= 70) return 'Bien. Conoces las normas básicas, pero hay áreas que puedes mejorar.';
    if (score >= 60) return 'Regular. Te recomendamos estudiar más antes de presentar el examen oficial.';
    return 'Necesitas estudiar más. Te sugerimos practicar en modo estudio antes de intentar nuevamente.';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-gray-900">Reporte de Resultados</h1>
              <p className="text-xs md:text-sm text-gray-500">
                {result.mode === 'study' ? 'Modo Estudio' : 'Modo Examen'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        {/* Score Overview */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
          <div className="text-center mb-6 md:mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full ${getScoreBgColor(result.score)} mb-4`}>
              <span className={`text-xl md:text-2xl lg:text-3xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}
              </span>
            </div>
            <h2 className={`text-xl md:text-2xl font-bold ${getScoreColor(result.score)} mb-2`}>
              {result.score >= 70 ? '¡Aprobado!' : 'No Aprobado'}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              {getScoreMessage(result.score)}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-3 md:p-4 mb-2">
                <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">{result.score}/100</div>
              <div className="text-xs md:text-sm text-gray-500">Puntuación</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-3 md:p-4 mb-2">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-600 mx-auto" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">{result.correctAnswers}</div>
              <div className="text-xs md:text-sm text-gray-500">Correctas</div>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-lg p-3 md:p-4 mb-2">
                <XCircle className="h-6 w-6 md:h-8 md:w-8 text-red-600 mx-auto" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">{result.incorrectAnswers}</div>
              <div className="text-xs md:text-sm text-gray-500">Incorrectas</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-3 md:p-4 mb-2">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-gray-900">{formatTime(result.timeSpent)}</div>
              <div className="text-xs md:text-sm text-gray-500">Tiempo Total</div>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Revisión Detallada</h3>
          
          <div className="space-y-4 md:space-y-6">
            {questions.map((question, index) => {
              const userAnswer = result.answers.find(a => a.questionId === question.id);
              const isCorrect = userAnswer?.isCorrect ?? false;
              
              return (
                <div key={question.id} className="border border-gray-200 rounded-lg p-3 md:p-4 lg:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                      isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {isCorrect ? (
                        <CheckCircle className="h-3 w-3 md:h-5 md:w-5" />
                      ) : (
                        <XCircle className="h-3 w-3 md:h-5 md:w-5" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-2 md:mb-3">
                        <span className="text-xs md:text-sm font-medium text-gray-500">Pregunta {index + 1}</span>
                        <h4 className="text-sm md:text-base lg:text-lg font-medium text-gray-900 mt-1">
                          {question.question}
                        </h4>
                      </div>

                      <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                        {question.options.map((option, optionIndex) => {
                          const isUserAnswer = userAnswer?.selectedAnswer === optionIndex;
                          const isCorrectAnswer = optionIndex === question.correctAnswer;
                          
                          let optionClass = 'p-2 md:p-3 rounded-lg border text-xs md:text-sm ';
                          
                          if (isCorrectAnswer) {
                            optionClass += 'border-green-200 bg-green-50 text-green-800';
                          } else if (isUserAnswer && !isCorrect) {
                            optionClass += 'border-red-200 bg-red-50 text-red-800';
                          } else {
                            optionClass += 'border-gray-200 bg-gray-50 text-gray-600';
                          }
                          
                          return (
                            <div key={optionIndex} className={optionClass}>
                              <div className="flex items-center gap-2 justify-between">
                                <span className="font-medium">
                                  {String.fromCharCode(65 + optionIndex)}.
                                </span>
                                <span className="flex-1">{option}</span>
                                <div className="flex-shrink-0">
                                  {isCorrectAnswer && <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600" />}
                                  {isUserAnswer && !isCorrect && <XCircle className="h-3 w-3 md:h-4 md:w-4 text-red-600" />}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {question.explanation && !isCorrect && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 md:p-4 rounded-r-lg">
                          <p className="text-xs md:text-sm text-blue-800">
                            <strong>Explicación:</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 justify-center px-4">
          <button
            onClick={onRetry}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
          >
            <RotateCcw className="h-4 w-4" />
            Intentar Nuevamente
          </button>
          
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};