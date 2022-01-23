<script lang="ts">
  import { WORD_LENGTH } from '../constants';
  import type { Evaluation } from '../types';
  import GridCell from './GridCell.svelte';

  export let attempt = '';
  export let evaluation: Evaluation[] = [];

  $: getChar = (i: number) => {
    return attempt[i] || '';
  };
</script>

<div class="grid-row">
  {#each Array(WORD_LENGTH) as _, i}
    <GridCell evaluation={evaluation[i]} char={getChar(i)} />
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
