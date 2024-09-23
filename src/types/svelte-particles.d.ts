// src/types/svelte-particles.d.ts
declare module 'svelte-particles' {
    import { SvelteComponentTyped } from 'svelte';
    import { ISourceOptions } from 'tsparticles-engine';
  
    export default class Particles extends SvelteComponentTyped<
      { options: ISourceOptions; id?: string },
      Record<string, never>,
      Record<string, never>
    > {}
  }
  