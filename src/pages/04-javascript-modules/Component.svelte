<script>
  import { onMount } from 'svelte';
  // import module state stores
  import { foo, settings } from './index';

  export let number = 0;

  onMount(() => console.log(`mounted component #${number}`));
</script>

<div class="component">
  <h3>Component #{number}</h3>
  <p><code>module[index].foo = {$foo}</code></p>
  <p><code>module[index].settings = {JSON.stringify($settings)}</code></p>
</div>
