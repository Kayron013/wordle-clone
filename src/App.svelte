<script lang="ts">
  import PlayArea from './components/PlayArea.svelte';
</script>

<main>
  <h1>Wordle</h1>
  <PlayArea />
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
    border-bottom: 1px solid var(--clr-gray);
  }

  @media (min-width: 640px) {
    main {
      max-width: 100%;
    }
  }

  :root {
    --clr-lightgray: #767777;
    --clr-gray: #494949;
    --clr-darkgray: #3a3a3c;
    --clr-darkgreen: #538d4e;
    --clr-darkyellow: #b59f3b;
  }
</style>
