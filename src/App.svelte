<script>
  import { Route } from 'tinro';

  import ReadonlyState from './pages/01-readonly-shared-state/index.svelte';
  import ManipulatingState from './pages/02-manipulating-shared-state/index.svelte';
  import ModuleExports from './pages/03-module-exports/index.svelte';
  import { Index as JavascriptModules } from './pages/04-javascript-modules';
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: sans-serif;
    color: #333;
    background: #f3f3f3;
  }

  :global(pre) {
    padding: 1rem;
    background-color: #efefef;
  }

  :global(h3) {
    margin: 0;
    padding: 0 0 0.5rem;
    border-bottom: 1px solid #999;
  }

  :global(.component) {
    background-color: #fff;
    padding: 1rem;
    margin: 2rem 0;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  :global(.flex) {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="container">
  <h1>Svelte Module Explained</h1>

  <nav class="flex">
    <a href="/01-readonly-shared-state">01: Readonly shared shared</a>
    <a href="/02-manipulating-shared-state">02: Manipulating shared shared</a>
    <a href="/03-module-exports">03: Module Exports</a>
    <a href="/04-javascript-modules">04: Javascript Modules</a>
  </nav>
  <div>
    <Route path="/">
      <p>Svelte's `context="module"` explained by examples. Click on the links above.</p>
    </Route>
    <Route path="/01-readonly-shared-state">
      <ReadonlyState />
    </Route>
    <Route path="/02-manipulating-shared-state">
      <ManipulatingState />
    </Route>
    <Route path="/03-module-exports">
      <ModuleExports />
    </Route>
    <Route path="/04-javascript-modules">
      <JavascriptModules />
    </Route>
  </div>
</div>
