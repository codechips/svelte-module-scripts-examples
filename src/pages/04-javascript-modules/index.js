import { writable } from 'svelte/store';

// create and export shared state stores
export const foo = writable('foo');
export const settings = writable({ show: true });

// export helper functions
export const setFoo = s => foo.set(s);

export const toggleShow = () =>
  settings.update(state => ({ ...state, show: !state.show }));

// export Svelte components
export { default as Component } from './Component.svelte';
export { default as Index } from './Page.svelte';
