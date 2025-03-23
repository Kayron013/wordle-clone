<script lang="ts">
  import Key from './Key.svelte';

  let pressedKey = '';

  $: isKeyPressed = (key: string) => {
    return pressedKey == key;
  };

  const handleKeydown = (e: KeyboardEvent) => {
    pressedKey = e.key;
  };

  const handleKeyup = () => {
    pressedKey = '';
  };

  const keyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ];
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} on:blur={handleKeyup} />

<div class="keyboard">
  {#each keyRows as rowKeys}
    <div class="row">
      {#each rowKeys as key}
        <Key {key} isPressed={isKeyPressed(key)} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .keyboard {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
  }
  .row {
    display: grid;
    grid-template-rows: 60px;
    gap: 6px;
    justify-content: center;
  }
  .row:nth-of-type(1) {
    grid-template-columns: repeat(10, 1fr);
  }
  .row:nth-of-type(2) {
    grid-template-columns: repeat(9, 1fr);
    padding: 0 20px;
  }
  .row:nth-of-type(3) {
    grid-template-columns: 1.6fr repeat(7, 1fr) 1.6fr;
  }
</style>
