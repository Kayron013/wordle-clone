import type { Evaluation } from './types';

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;

export const statusValues: Record<Evaluation, number> = {
  absent: 1,
  present: 2,
  correct: 3,
};
