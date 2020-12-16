<script>
  import Component from './Component.svelte';
</script>

<h1>02: Manipulating Shared State</h1>

<p>
  Demonstrates how to manipulate shared state from a component. In this example you can
  manipulate shared state from each component.
</p>

<p>
  In order to manipulate variables defined on the module scope they have to be reactive.
  This is easy to do using Svelte's stores.
</p>

<Component number={1} />
<Component number={2} />
<Component number={3} />
