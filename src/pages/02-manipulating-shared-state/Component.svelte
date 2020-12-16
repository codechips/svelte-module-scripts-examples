<script context="module">
  import { writable } from 'svelte/store';

  const foo = writable('foo');
  const settings = writable({ show: true });
</script>

<script>
  import { onMount } from 'svelte';

  export let number = 0;
  onMount(() => console.log(`mounted component #${number}`));
</script>

<style>
  .mt {
    margin-top: 1rem;
  }
</style>

<div class="component">
  <h3>Component #{number}</h3>

  <div class="flex mt">
    <code>module[Component].foo = {$foo}</code>
    <button on:click={() => ($foo = `Component #${number}`)}>change foo</button>
  </div>

  <div class="flex mt">
    <code>module[Component].settings = {JSON.stringify($settings)}</code>
    <button on:click={() => ($settings.show = !$settings.show)}>toggle settings.show</button>
  </div>
</div>
