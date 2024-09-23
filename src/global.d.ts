// src/global.d.ts
import type { SvelteComponentTyped } from 'svelte';

declare module '*.svelte' {
  export default class extends SvelteComponentTyped<
    Record<string, never>, // Props
    Record<string, never>, // Events
    Record<string, never>  // Slots
  > {}
}
