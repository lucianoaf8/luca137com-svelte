// svelte.config.js
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

export default {
  preprocess: preprocess({
    typescript: true,
    // Add other preprocess options if needed
  }),
  kit: {
    adapter: adapter(),
    // ... other kit options
  },
};
