export interface Question {
  id: number;
  topic: string;
  question: string;
  image?: string;
  options: string[];
  optionImages?: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface ExamMode {
  type: 'study' | 'exam';
  timeLimit?: number; // in minutes
  selectedTopics?: string[];
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number; // in seconds
}

export interface ExamResult {
  mode: 'study' | 'exam';
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  timeSpent: number;
  answers: UserAnswer[];
}