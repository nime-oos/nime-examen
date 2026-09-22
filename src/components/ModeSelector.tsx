import React from 'react';
import {
  BookOpen,
  Clock,
  GraduationCap,
  Brain,
  Trophy,
  Zap,
  Target,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';
import { ExamMode } from '../types/exam';

interface ModeSelectorProps {
  onSelectMode: (mode: ExamMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ onSelectMode }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-50 opacity-60 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-50 opacity-60 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-cyan-50 opacity-40 rounded-full blur-2xl"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-200 opacity-40 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-200 opacity-50 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-200 opacity-30 rotate-12 animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center mb-6 md:mb-8 relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-6 md:p-8 shadow-xl relative">
              <GraduationCap className="h-12 w-12 md:h-24 md:w-24 text-white" />
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nime
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700">
              Examen Teórico
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
            Domina las normas de tránsito de Nicaragua con nuestra plataforma
            interactiva de aprendizaje. Practica con preguntas reales y obtén tu
            licencia de conducir.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-8 px-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 md:px-4">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
              <span className="text-xs md:text-sm text-gray-700 font-medium">
                Preguntas Oficiales
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 md:px-4">
              <Users className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
              <span className="text-xs md:text-sm text-gray-700 font-medium">
                4 Temas Principales
              </span>
            </div>
           
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto px-4">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                250+
              </div>
              <div className="text-xs md:text-sm text-gray-500">Preguntas</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                4
              </div>
              <div className="text-xs md:text-sm text-gray-500">Temas</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                60min
              </div>
              <div className="text-xs md:text-sm text-gray-500">Tiempo Máx</div>
            </div>
          </div>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 relative z-10 px-4 max-w-5xl mx-auto">
          {/* Study Mode */}
          <div
            onClick={() => onSelectMode({ type: 'study' })}
            className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 md:-translate-y-16 md:translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6 md:translate-y-12 md:-translate-x-12"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 group-hover:bg-white/30 transition-all duration-300">
                  <Brain className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-white/80 text-xs md:text-sm font-medium">
                    Modo
                  </div>
                  <div className="text-white text-lg md:text-2xl font-bold">
                    Estudio
                  </div>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-emerald-100 transition-colors">
                Aprende Paso a Paso
              </h2>

              <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
                Practica sin presión. Recibe retroalimentación inmediata y
                explicaciones detalladas para cada pregunta. Perfecto para
                principiantes.
              </p>

              <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Sin límite de tiempo
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Retroalimentación inmediata
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Explicaciones detalladas
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Todos los temas disponibles
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-3 w-3 md:h-4 md:w-4 text-emerald-300" />
                  <span className="text-emerald-200 text-xs md:text-sm font-medium">
                    Ideal para aprender
                  </span>
                </div>
                <div className="bg-white/20 rounded-full p-1.5 md:p-2 group-hover:bg-white/30 transition-all duration-300">
                  <Target className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Exam Mode */}
          <div
            onClick={() => onSelectMode({ type: 'exam', timeLimit: 30 })}
            className="group bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-white/5 rounded-full -translate-y-10 -translate-x-10 md:-translate-y-20 md:-translate-x-20"></div>
            <div className="absolute bottom-0 right-0 w-18 h-18 md:w-28 md:h-28 bg-white/5 rounded-full translate-y-7 translate-x-7 md:translate-y-14 md:translate-x-14"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 group-hover:bg-white/30 transition-all duration-300">
                  <Trophy className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-white/80 text-xs md:text-sm font-medium">
                    Modo
                  </div>
                  <div className="text-white text-lg md:text-2xl font-bold">
                    Examen
                  </div>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-100 transition-colors">
                Examen Real
              </h2>

              <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
                Simula el examen oficial con tiempo límite configurable. Obtén
                tu puntuación y reporte detallado de rendimiento.
              </p>

              <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Tiempo límite: 30-60 minutos
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Puntuación 1-100
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Reporte final detallado
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-white/90 text-xs md:text-sm">
                    Selección de temas
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 text-blue-300" />
                  <span className="text-blue-200 text-xs md:text-sm font-medium">
                    Condiciones reales
                  </span>
                </div>
                <div className="bg-white/20 rounded-full p-1.5 md:p-2 group-hover:bg-white/30 transition-all duration-300">
                  <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tips */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-gray-900 font-semibold mb-3 text-sm md:text-base">
              💡 Consejos para el éxito
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
              <div>• Practica primero en modo estudio</div>
              <div>• Lee cada pregunta cuidadosamente</div>
              <div>• Memoriza las señales de tránsito</div>
              <div>• Repasa la Ley 431 frecuentemente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
