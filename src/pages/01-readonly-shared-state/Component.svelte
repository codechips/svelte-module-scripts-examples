<script context="module">
  console.log('init module');

  // variables need to be reactive in order for components
  // to pick up the changes. Use Svelte stores in this case.
  let foo = 'bar';
  const settings = { show: true };
</script>

<script>
  import { onMount } from 'svelte';

  export let number = 0;

  console.log('init component');

  onMount(() => console.log(`mounted component #${number}`));
</script>

<div class="component">
  <h3>Component #{number}</h3>
  <p><code>module[Component].foo = {foo}</code></p>
  <p><code>module[Component].settings = {JSON.stringify(settings)}</code></p>
</div>
