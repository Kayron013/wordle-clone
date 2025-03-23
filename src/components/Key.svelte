<script lang="ts">
  import Fa from 'svelte-fa';
  import { faBackspace } from '@fortawesome/free-solid-svg-icons';
  import { charStores } from '../stores';

  export let key: string;
  export let isPressed: boolean;

  $: handleClick = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key }));
    setTimeout(() => {
      window.dispatchEvent(new KeyboardEvent('keyup', { key }));
    }, 200);
  };

  const status = charStores.get(key);
</script>

<div class="key {$status ?? ''} {$status ? 'reveal' : ''} {isPressed ? 'pressed' : ''}" on:click={handleClick}>
  {#if key === 'Backspace'}
    <Fa icon={faBackspace} size="lg" />
  {:else}
    {key}
  {/if}
</div>

<style>
  .key {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    background-color: var(--clr-lightgray);
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 1px;
    cursor: pointer;
    user-select: none;
  }
  .key:not(.pressed):hover {
    filter: brightness(0.8);
  }
  .pressed {
    filter: brightness(0.6);
  }
  .reveal {
    transition: background-color 0.2s linear 1.6s;
  }
  .absent {
    background-color: var(--clr-darkgray);
  }
  .present {
    background-color: var(--clr-darkyellow);
  }
  .correct {
    background-color: var(--clr-darkgreen);
  }
</style>
