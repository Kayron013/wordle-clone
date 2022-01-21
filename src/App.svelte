<script lang="ts">
  import PlayArea from './components/PlayArea.svelte';
</script>

<main>
  <h1>Wordle</h1>
  <PlayArea />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    width: 500px;
    padding: 8px;
  }

  h1 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2.5em;
    margin: 0;
    border-bottom: 1px solid var(--clr-gray);
  }

  :root {
    --clr-lightgray: #767777;
    --clr-gray: #494949;
    --clr-darkgray: #3a3a3c;
    --clr-darkgreen: #538d4e;
    --clr-darkyellow: #b59f3b;
  }
</style>
