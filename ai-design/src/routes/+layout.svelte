<!-- Add this in the <head> section -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
    rel="stylesheet"
/>

<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import Particles from 'svelte-particles';
    const options = {
      background: {
        color: {
          value: '#0a0a0a',
        },
      },
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#0ff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 3,
        },
        move: {
          enable: true,
          speed: 0.5,
        },
      },
    };
  </script>
  
  <Particles id="tsparticles" options={options} />
  
  <slot />
  