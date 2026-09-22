import React, { useState } from 'react';
import { Clock, ArrowLeft, Play, CheckSquare, Square, Users } from 'lucide-react';
import { ExamMode } from '../types/exam';
import { getTopics } from '../utils/questionUtils';
import { questions } from '../data/questions';

interface ExamConfigProps {
  onStartExam: (config: ExamMode) => void;
  onBack: () => void;
}

export const ExamConfig: React.FC<ExamConfigProps> = ({ onStartExam, onBack }) => {
  const [timeLimit, setTimeLimit] = useState(30);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const availableTopics = getTopics(questions);

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSelectAll = () => {
    if (selectedTopics.length === availableTopics.length) {
      setSelectedTopics([]);
    } else {
      setSelectedTopics([...availableTopics]);
    }
  };

  const handleStartExam = () => {
    onStartExam({
      type: 'exam',
      timeLimit,
      selectedTopics: selectedTopics.length > 0 ? selectedTopics : availableTopics
    });
  };

  const getTopicQuestionCount = (topic: string) => {
    return questions.filter(q => q.topic === topic).length;
  };

  const getTotalQuestions = () => {
    if (selectedTopics.length === 0) return questions.length;
    return questions.filter(q => selectedTopics.includes(q.topic)).length;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </button>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 md:p-6 w-16 h-16 md:w-20 md:h-20 mx-auto mb-6">
            <Clock className="h-6 w-6 md:h-8 md:w-8 text-white mx-auto" />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Configurar Examen
          </h1>
          <p className="text-gray-600 text-base md:text-lg px-4">
            Personaliza tu experiencia de examen
          </p>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200">
          {/* Time Limit Section */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-400" />
              Límite de Tiempo
            </h3>
            
            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 text-sm md:text-base">Duración del examen</span>
                <span className="text-xl md:text-2xl font-bold text-gray-900">{timeLimit} min</span>
              </div>
              
              <input
                type="range"
                min="30"
                max="60"
                step="5"
                value={timeLimit}
                onChange={(e) => setTimeLimit(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              
              <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
                <span>30 min</span>
                <span>45 min</span>
                <span>60 min</span>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                Temas a Evaluar
              </h3>
              <button
                onClick={handleSelectAll}
                className="text-xs md:text-sm text-blue-600 hover:text-blue-700 transition-colors"
              >
                {selectedTopics.length === availableTopics.length ? 'Deseleccionar todo' : 'Seleccionar todo'}
              </button>
            </div>
            
            <div className="space-y-3">
              {availableTopics.map((topic) => (
                <div
                  key={topic}
                  onClick={() => handleTopicToggle(topic)}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-200 border border-gray-200 hover:border-gray-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedTopics.includes(topic) ? (
                        <CheckSquare className="h-5 w-5 text-blue-400" />
                      ) : (
                        <Square className="h-5 w-5 text-gray-400" />
                      )}
                      <div>
                        <div className="text-gray-900 font-medium text-sm md:text-base">{topic}</div>
                        <div className="text-gray-500 text-xs md:text-sm">
                          {getTopicQuestionCount(topic)} preguntas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedTopics.length === 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg md:rounded-xl p-3 md:p-4 mt-4">
                <p className="text-yellow-700 text-xs md:text-sm">
                  ℹ️ Si no seleccionas ningún tema, se incluirán todas las preguntas disponibles.
                </p>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-8">
            <h4 className="text-gray-900 font-semibold mb-3 text-sm md:text-base">Resumen del Examen</h4>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              <div>
                <span className="text-gray-500">Duración:</span>
                <div className="text-gray-900 font-medium">{timeLimit} minutos</div>
              </div>
              <div>
                <span className="text-gray-500">Preguntas:</span>
                <div className="text-gray-900 font-medium">{getTotalQuestions()} preguntas</div>
              </div>
              <div>
                <span className="text-gray-500">Temas:</span>
                <div className="text-gray-900 font-medium">
                  {selectedTopics.length > 0 ? selectedTopics.length : availableTopics.length} de {availableTopics.length}
                </div>
              </div>
              <div>
                <span className="text-gray-500">Puntuación:</span>
                <div className="text-gray-900 font-medium">1 - 100 puntos</div>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStartExam}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 md:py-4 px-6 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
          >
            <Play className="h-5 w-5" />
            Comenzar Examen
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};