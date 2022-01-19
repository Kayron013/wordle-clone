import type { Status } from './types';

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;

export const statusValues: Record<Status, number> = {
  '': 0,
  absent: 1,
  present: 2,
  correct: 3,
};
