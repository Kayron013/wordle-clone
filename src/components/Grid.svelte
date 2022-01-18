<script>
  import GridRow from './GridRow.svelte';
</script>

<div class="container">
  <div class="grid">
    <GridRow />
    <GridRow />
    <GridRow />
    <GridRow />
    <GridRow />
    <GridRow />
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(6, 60px);
    grid-gap: 5px;
  }
</style>
