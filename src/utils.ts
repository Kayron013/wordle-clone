import { MAX_GUESSES } from './constants';
import type { Evaluation } from './types';

export const evaluateAttempt = (attempt: string, target: string) => {
  const evaluation: Evaluation[] = [...attempt].map((c, i) => {
    if (c === target[i]) {
      return 'correct';
    }
    if (target.includes(c)) {
      return 'present';
    }
    return 'absent';
  });
  return evaluation;
};

const evaluationEmojis: Record<Evaluation, string> = {
  correct: '🟩',
  present: '🟨',
  absent: '⬛',
};

export const renderEvaluations = (attempts: Evaluation[][]) => {
  const evalGrid = attempts
    .map(attempt => {
      return attempt
        .map(status => {
          return evaluationEmojis[status];
        })
        .join('');
    })
    .join('\n');

  return `${attempts.length}/${MAX_GUESSES}\n${evalGrid}`;
};
