<script>
  // import module state and Svelte components from main module file
  import { Component, toggleShow, setFoo, foo } from './index';

  let value = '';

  const setValue = () => {
    setFoo(value);
    value = '';
  };
</script>

<h1>04: Javascript Modules</h1>

<p>
  Example of how to re-create (or fake) Svelte module functionality using pure JS modules
</p>

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
