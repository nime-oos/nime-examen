import { Question } from '../types/exam';

export const getTopics = (questions: Question[]): string[] => {
  const topics = [...new Set(questions.map(q => q.topic))];
  return topics.sort();
};

export const getQuestionsByTopics = (questions: Question[], topics: string[]): Question[] => {
  if (topics.length === 0) return questions;
  return questions.filter(q => topics.includes(q.topic));
};

export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
 /* for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }*/
  return shuffled;
};

export const getRandomQuestions = (questions: Question[], count?: number): Question[] => {
  const shuffled = shuffleQuestions(questions);
  return count ? shuffled.slice(0, count) : shuffled;
};

export const shuffleOptions = (question: Question): Question => {
  const options = [...question.options];
  const correctOption = options[question.correctAnswer];
  
  // Create array of indices and shuffle them
  const indices = Array.from({ length: options.length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  
  // Reorder options based on shuffled indices
  const shuffledOptions = indices.map(i => options[i]);

  // Find new position of correct answer
  const newCorrectAnswer = shuffledOptions.findIndex(option => option === correctOption);

  // Reorder option images with the same permutation so they stay aligned with options
  const shuffledOptionImages = question.optionImages
    ? indices.map(i => question.optionImages![i])
    : question.optionImages;

  return {
    ...question,
    options: shuffledOptions,
    optionImages: shuffledOptionImages,
    correctAnswer: newCorrectAnswer
  };
};

export const shuffleQuestionsWithOptions = (questions: Question[]): Question[] => {
  return shuffleQuestions(questions).map(question => shuffleOptions(question));
};