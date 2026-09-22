import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Question } from '../types/exam';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answer: number) => void;
  showResult: boolean;
  mode: 'study' | 'exam';
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  mode
}) => {
  const getOptionStyle = (index: number) => {
    const baseStyle = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:bg-gray-50";
    
    if (!showResult) {
      if (selectedAnswer === index) {
        return `${baseStyle} border-blue-500 bg-blue-50 text-blue-900`;
      }
      return `${baseStyle} border-gray-200 hover:border-gray-300`;
    }

    // Show results
    if (index === question.correctAnswer) {
      return `${baseStyle} border-green-500 bg-green-50 text-green-900`;
    }
    
    if (selectedAnswer === index && selectedAnswer !== question.correctAnswer) {
      return `${baseStyle} border-red-500 bg-red-50 text-red-900`;
    }

    return `${baseStyle} border-gray-200 opacity-60`;
  };

  const getOptionIcon = (index: number) => {
    if (!showResult) return null;

    if (index === question.correctAnswer) {
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    }
    
    if (selectedAnswer === index && selectedAnswer !== question.correctAnswer) {
      return <XCircle className="h-5 w-5 text-red-600" />;
    }

    return null;
  };

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
      <div className="mb-6 md:mb-8">
        <div className="flex items-start gap-3 mb-4 md:mb-6">
          <span className="bg-blue-100 text-blue-800 text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
            Pregunta {question.id}
          </span>
        </div>
        
        {/* Question Image */}
        {question.image && (
          <div className="mb-4 md:mb-6 flex justify-center">
            <div className="bg-gray-100 rounded-lg p-3 md:p-4 shadow-inner">
              <img 
                src={question.image} 
                alt="Señal de tránsito" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        )}
        
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options - Text or Images */}
      {question.optionImages ? (
        // Image options
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
          {question.optionImages.map((imageUrl, index) => (
            <button
              key={index}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
              className={`relative p-3 md:p-4 rounded-lg border-2 transition-all duration-200 hover:bg-gray-50 ${
                !showResult
                  ? selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                  : index === question.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : selectedAnswer === index && selectedAnswer !== question.correctAnswer
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 opacity-60'
              }`}
            >
              <div className="text-center">
                <div className="mb-2 md:mb-3">
                  <img 
                    src={imageUrl} 
                    alt={`Opción ${index + 1}`}
                    className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-lg shadow-sm mx-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    {index + 1}
                  </span>
                  <div className="flex-shrink-0">
                    {getOptionIcon(index)}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        // Text options
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
              className={getOptionStyle(index)}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                  <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-full flex items-center justify-center">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-xs md:text-sm leading-relaxed text-left break-words">{option}</span>
                </div>
                <div className="flex-shrink-0">
                  {getOptionIcon(index)}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {showResult && mode === 'study' && question.explanation && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 md:p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs md:text-sm font-medium text-blue-900 mb-1">Explicación</h3>
              <p className="text-xs md:text-sm text-blue-800 leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};