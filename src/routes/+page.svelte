<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Hologram from '../lib/components/Hologram.svelte';
  import ContactIcons from '../lib/components/ContactIcons.svelte';
  import ProjectsCarousel from '../lib/components/ProjectsCarousel.svelte';
</script>

<svelte:head>
  <title>AI Engineer Portfolio</title>
  <meta name="description" content="A futuristic portfolio website of an AI Engineer." />
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="AI Engineer Portfolio" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com" />
  <meta property="og:images" content="https://yourwebsite.com/og-image.jpg" />
</svelte:head>

<div class="flex flex-col md:flex-row h-screen">
  <!-- Left Side -->
  <div class="md:w-1/2 flex flex-col items-center justify-center relative">
    <Hologram />
    <ContactIcons />
  </div>

  <!-- Right Side -->
  <div class="md:w-1/2 flex items-center justify-center">
    <ProjectsCarousel />
  </div>
</div>
