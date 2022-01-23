<script lang="ts">
  import { charStores } from '../stores';

  import type { Evaluation } from '../types';

  export let char: string = '';
  export let evaluation: Evaluation;

  $: if (evaluation) {
    charStores.get(char).update(evaluation);
  }
</script>

<div class="cell {char ? 'filled' : ''} {evaluation ?? ''} {evaluation ? 'reveal' : ''}">{char}</div>

<style>
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid var(--clr-gray);
    height: 100%;
    width: 100%;
    padding-bottom: 4px;
  }
  .absent {
    --bg-clr: var(--clr-darkgray);
  }
  .correct {
    --bg-clr: var(--clr-darkgreen);
  }
  .present {
    --bg-clr: var(--clr-darkyellow);
  }
  .filled {
    animation: bump 0.1s linear forwards;
  }
  .reveal {
    animation: flip 0.6s ease-in-out forwards;
  }
  .reveal:nth-of-type(1) {
    animation-delay: 0s;
  }
  .reveal:nth-of-type(2) {
    animation-delay: 0.3s;
  }
  .reveal:nth-of-type(3) {
    animation-delay: 0.6s;
  }
  .reveal:nth-of-type(4) {
    animation-delay: 0.9s;
  }
  .reveal:nth-of-type(5) {
    animation-delay: 1.2s;
  }

  @keyframes bump {
    0% {
      transform: scale(0.93);
    }
    50% {
      transform: scale(1.07);
    }
    100% {
      transform: scale(1);
      border-color: var(--clr-lightgray);
    }
  }

  @keyframes flip {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
      background-color: var(--bg-clr);
      border: none;
    }
  }
</style>
