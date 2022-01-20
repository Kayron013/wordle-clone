<script lang="ts">
  import { get } from 'svelte/store';

  import { MAX_GUESSES, WORD_LENGTH } from '../constants';
  import { gameState } from '../stores/gameState';
  import { dictionary, targets } from '../words';
  import Grid from './Grid.svelte';
  import Keyboard from './Keyboard.svelte';

  let attempts: string[] = [];
  let currentAttempt = '';

  const targetList = [...targets.keys()];
  const target = targetList[Math.floor(Math.random() * targetList.length)];

  $: if (attempts[attempts.length - 1] === target) {
    setTimeout(() => {
      alert('You win!');
      gameState.set('over');
    }, 2000);
  } else if (attempts.length === MAX_GUESSES) {
    setTimeout(() => {
      alert(`You lose! The word was ${target}`);
      gameState.set('over');
    }, 2000);
  }

  const isValid = (guess: string) => {
    return targets.has(guess) || dictionary.has(guess);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (get(gameState) !== 'playing') return;

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
      currentAttempt = '';
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<Grid {attempts} {currentAttempt} {target} />
<Keyboard />
