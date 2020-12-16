<script>
  import Component from './Component.svelte';
</script>

<h2>01: Readonly Shared State</h2>

<p>
  This is the simplest possible example of `context="module"` and it demonstrates how you
  can share state between components. There are other ways of doing it in Svelte too, but
  this is how you do it with modules.
</p>

<p>
  When variables and functions are defined on the module scope they will be evaluated only
  <strong>once</strong>, when the module is first evaluated (imported), and will be
  available to all components defined in that module.
</p>

<p>
  As of today, you can only have one component per module in Svelte, but there is an RFC
  to be able to define multiple componenents per module, eg in one Svelte file. Maybe it
  will be possible in Svelte v4 🤞.
</p>

<Component number={1} />
<Component number={2} />
<Component number={3} />
