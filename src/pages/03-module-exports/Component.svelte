<script context="module">
  import { writable } from 'svelte/store';

  // export foo store from module
  export const foo = writable('foo');
  // this store is private, not exported from the module
  const settings = writable({ show: true });

  export const setFoo = s => {
    foo.set(s);
  };

  // export function to manipulate module state that is private to the module
  export const toggleShow = () =>
    settings.update(state => ({ ...state, show: !state.show }));
</script>

<script>
  import { onMount } from 'svelte';

  export let number = 0;

  onMount(() => console.log(`mounted component #${number}`));
</script>

<div class="component">
  <h3>Component #{number}</h3>
  <p><code>module[Component].foo = {$foo}</code></p>
  <p><code>module[Component].settings = {JSON.stringify($settings)}</code></p>
</div>
