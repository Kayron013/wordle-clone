<script lang="ts">
  import { WORD_LENGTH } from '../constants';
  import GridCell from './GridCell.svelte';

  export let attempt = '';
  export let reveal = false;
  export let target = '';
  export let active = false;

  $: getChar = (i: number) => {
    return attempt[i] || '';
  };

  $: getStatus = (i: number) => {
    if (!reveal) return '';

    const char = getChar(i);
    if (char === target[i]) {
      return 'correct';
    }
    if (target.includes(char)) {
      return 'present';
    }
    return 'absent';
  };
</script>

<div class="grid-row {active ? 'active' : ''}">
  {#each Array(WORD_LENGTH) as _, i}
    <GridCell status={getStatus(i)}>{getChar(i)}</GridCell>
  {/each}
</div>

<style>
  .grid-row {
    display: grid;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(1, 60px);
    gap: 5px;
  }
</style>
