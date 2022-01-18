<script lang="ts">
  import { MAX_GUESSES } from '../constants';
  import GridRow from './GridRow.svelte';

  export let attempts: string[] = [];
  export let currentAttempt = '';
  export let target = '';

  $: playableRows = MAX_GUESSES - attempts.length;
  $: emptyRows = currentAttempt ? playableRows - 1 : playableRows;

  $: console.log({ emptyRows, playableRows });
</script>

<div class="container">
  <div class="grid">
    {#each attempts as attempt}
      <GridRow {attempt} {target} reveal />
    {/each}
    {#if currentAttempt}
      <GridRow attempt={currentAttempt} active />
    {/if}
    {#each Array(emptyRows) as _, i}
      <GridRow />
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(6, auto);
    grid-gap: 5px;
  }
</style>
