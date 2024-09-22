<!-- src/routes/+page.svelte -->
<script lang="ts">
    import Hologram from '../lib/components/Hologram.svelte';
    import ContactIcons from '../lib/components/ContactIcons.svelte';
    import ProjectsCarousel from '../lib/components/ProjectsCarousel.svelte';
    import { MetaTags } from 'svelte-meta-tags';
  </script>
  
  <MetaTags
  title="AI Engineer Portfolio"
  description="A futuristic portfolio website of an AI Engineer."
  openGraph={{
    title: 'AI Engineer Portfolio',
    type: 'website',
    url: 'https://yourwebsite.com',
    image: 'https://yourwebsite.com/og-image.jpg',
  }}
  />
  
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
  