<script>
  import Component, { toggleShow, setFoo, foo } from './Component.svelte';
  let value = '';

  const setValue = () => {
    setFoo(value);
    value = '';
  };
</script>

<h2>03: Module Exports</h2>

<p>Example of how to export a function and a store from a Svelte module.</p>

<p><strong>Change values outside the component</strong></p>

<div>
  <code>foo = {$foo}</code>
  <input type="text" placeholder="New foo value" bind:value />
  <button on:click={setValue}>set foo value</button>
  <button on:click={toggleShow}>toggle show outside component</button>
</div>

<Component number={1} />
<Component number={2} />
<Component number={3} />
