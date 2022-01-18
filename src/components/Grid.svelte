<script>
  import GridRow from './GridRow.svelte';

  export let attempts = [];
  export let currentAttempt = '';
  export let target = '';

  const playableRows = 6 - attempts.length;
  const emptyRows = currentAttempt ? playableRows - 1 : playableRows;
</script>

<div class="container">
  <div class="grid">
    {#each attempts as attempt}
      <GridRow {attempt} {target} reveal />
    {/each}
    {#if currentAttempt}
      <GridRow attempt={currentAttempt} />
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
