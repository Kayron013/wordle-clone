<script lang="ts">
  import { charStores } from '../stores/charStores';

  import type { Status } from '../types';

  export let char: string = '';
  export let status: Status = '';

  $: if (status) {
    charStores.get(char).update(status);
  }
</script>

<div class="cell {status} {status ? 'reveal' : ''}">{char}</div>

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

  @keyframes flip {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(90deg);
      /* background-color: var(--bg-clr); */
    }
    100% {
      transform: rotateX(0deg);
      background-color: var(--bg-clr);
      border: none;
    }
  }
</style>
