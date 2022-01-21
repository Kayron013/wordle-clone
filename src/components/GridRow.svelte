<script lang="ts">
  import { WORD_LENGTH } from '../constants';
  import GridCell from './GridCell.svelte';

  export let attempt = '';
  export let target = '';

  $: getChar = (i: number) => {
    return attempt[i] || '';
  };

  $: getStatus = (i: number) => {
    if (!target) return '';

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

<div class="grid-row">
  {#each Array(WORD_LENGTH) as _, i}
    <GridCell status={getStatus(i)} char={getChar(i)} />
  {/each}
</div>

<style>
  .grid-row {
    display: grid;
    grid-template-columns: repeat(5, minmax(48px, 8vh));
    grid-template-rows: repeat(1, minmax(48px, 8vh));
    gap: 5px;
  }
</style>
