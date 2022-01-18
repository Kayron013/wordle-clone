<script lang="ts">
  import Grid from './components/Grid.svelte';
</script>

<main>
  <h1>Wordle</h1>
  <Grid />
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    background-color: #121213;
    color: rgb(212, 212, 212);
  }

  main {
    text-align: center;
    padding: 0 5em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 3em;
    margin: 10px;
    border-bottom: 1px solid var(--clr-darkgray);
  }

  @media (min-width: 640px) {
    main {
      max-width: 100%;
    }
  }

  :root {
    --clr-darkgray: rgb(88, 88, 88);
  }
</style>
