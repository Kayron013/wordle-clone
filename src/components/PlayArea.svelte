<script lang="ts">
  import { MAX_GUESSES, WORD_LENGTH } from '../constants';
  import { dictionary, targets } from '../words';
  import Grid from './Grid.svelte';

  let attempts: string[] = [];
  let currentAttempt = '';

  const targetList = [...targets.keys()];
  const target = targetList[Math.floor(Math.random() * targetList.length)];

  const isValid = (guess: string) => {
    return targets.has(guess) || dictionary.has(guess);
  };

  $: console.log({ attempts, currentAttempt, target });

  const handleKeydown = (e: KeyboardEvent) => {
    if (attempts.length === MAX_GUESSES) return;

    const key = e.key.toLowerCase();

    if (key.match(/^[a-z]$/) && currentAttempt.length < WORD_LENGTH) {
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
