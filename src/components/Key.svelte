<script lang="ts">
  import Fa from 'svelte-fa';
  import { faBackspace } from '@fortawesome/free-solid-svg-icons';
  import type { Status } from '../types';
  import { charStores } from '../stores/charStores';

  export let key: string;
  $: keyCode = /^[a-z]$/.test(key)
    ? key.toUpperCase().charCodeAt(0)
    : key === 'backspace'
    ? 8
    : key === 'enter'
    ? 13
    : null;

  $: handleClick = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { keyCode, key }));
  };

  const status = charStores.get(key);
</script>

<div class="key {$status}" on:click={handleClick}>
  {#if key === 'backspace'}
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
