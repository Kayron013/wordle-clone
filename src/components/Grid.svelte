<script lang="ts">
  import { MAX_GUESSES } from '../constants';
  import GridRow from './GridRow.svelte';

  export let attempts: string[] = [];
  export let currentAttempt = '';
  export let target = '';

  $: playableRows = MAX_GUESSES - attempts.length;
  $: emptyRows = currentAttempt ? playableRows - 1 : playableRows;
</script>

<div class="container">
  <div class="grid">
    {#each attempts as attempt}
      <GridRow {attempt} {target} />
    {/each}
    {#if currentAttempt}
      <GridRow attempt={currentAttempt} />
    {/if}
    {#each Array(emptyRows) as _}
      <GridRow />
    {/each}
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(6, auto);
    grid-gap: 5px;
    justify-content: center;
  }
</style>
