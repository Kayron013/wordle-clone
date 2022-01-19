<script lang="ts">
  import { charStores } from '../stores/charStores';

  import type { Status } from '../types';

  export let char: string = '';
  export let status: Status = '';

  $: if (status) {
    charStores.get(char).update(status);
  }
</script>

<div class="cell {status}">{char}</div>

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
    border: none;
    background-color: var(--clr-darkgray);
  }
  .correct {
    border: none;
    background-color: var(--clr-darkgreen);
  }
  .present {
    border: none;
    background-color: var(--clr-darkyellow);
  }
</style>
