<script lang="ts">
  import { get } from 'svelte/store';
  import { MAX_GUESSES, WORD_LENGTH } from '../constants';
  import { charStores, gameStore } from '../stores';
  import type { Evaluation } from '../types';
  import { evaluateAttempt, renderEvaluations } from '../utils';
  import { dictionary, targets } from '../words';
  import Grid from './Grid.svelte';
  import Keyboard from './Keyboard.svelte';

  let attempts: string[] = [];
  let evaluations: Evaluation[][] = [];
  let currentAttempt = '';

  const targetList = [...targets.keys()];
  let target = targetList[Math.floor(Math.random() * targetList.length)];

  const reset = () => {
    attempts = [];
    evaluations = [];
    currentAttempt = '';
    charStores.forEach(store => store.reset());
    target = targetList[Math.floor(Math.random() * targetList.length)];
  };

  const rowAnimationTime = 2000;
  $: if (attempts[attempts.length - 1] === target) {
    setTimeout(() => {
      console.log(renderEvaluations(evaluations));
      if (confirm('You win!\nPlay again?')) {
        reset();
      } else {
        gameStore.set('over');
      }
    }, rowAnimationTime);
  } else if (attempts.length === MAX_GUESSES) {
    setTimeout(() => {
      console.log(renderEvaluations(evaluations));
      if (confirm(`You lose! The word was ${target}\nPlay again?`)) {
        reset();
      } else {
        gameStore.set('over');
      }
    }, rowAnimationTime);
  }

  const isValid = (guess: string) => {
    return targets.has(guess) || dictionary.has(guess);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (get(gameStore) !== 'playing') return;

    if (attempts.length === MAX_GUESSES) return;

    const key = e.key.toLowerCase();

    if (/^[a-z]$/.test(key) && currentAttempt.length < WORD_LENGTH) {
      currentAttempt += key;
    }

    if (key === 'backspace') {
      currentAttempt = currentAttempt.slice(0, -1);
    }

    if (key === 'enter' && currentAttempt.length === WORD_LENGTH) {
      if (!isValid(currentAttempt)) {
        alert('Invalid word');
        return;
      }
      attempts = [...attempts, currentAttempt];
      evaluations = [...evaluations, evaluateAttempt(currentAttempt, target)];
      currentAttempt = '';
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<Grid {attempts} {currentAttempt} {evaluations} />
<Keyboard />
