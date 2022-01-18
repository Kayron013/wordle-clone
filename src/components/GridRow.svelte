<script lang="ts">
  import GridCell from './GridCell.svelte';

  export let attempt = '';
  export let reveal = false;
  export let target = '';

  const getChar = (i: number) => {
    return attempt[i] || '';
  };

  const getStatus = (i: number) => {
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

<div class="grid-row">
  <GridCell status={getStatus(0)}>{getChar(0)}</GridCell>
  <GridCell status={getStatus(1)}>{getChar(1)}</GridCell>
  <GridCell status={getStatus(2)}>{getChar(2)}</GridCell>
  <GridCell status={getStatus(3)}>{getChar(3)}</GridCell>
  <GridCell status={getStatus(4)}>{getChar(4)}</GridCell>
</div>

<style>
  .grid-row {
    display: grid;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(1, 60px);
    gap: 5px;
  }
</style>
