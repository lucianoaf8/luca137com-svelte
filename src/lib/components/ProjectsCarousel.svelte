<!-- src/lib/components/ProjectsCarousel.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { InertiaPlugin } from 'gsap/InertiaPlugin';
    import { Draggable } from 'gsap/Draggable';
  
    gsap.registerPlugin(InertiaPlugin, Draggable);
  
    let projects = [];
    let carousel: HTMLDivElement;
  
    onMount(async () => {
      // Fetch projects from Strapi
      const res = await fetch('http://localhost:1337/api/projects');
      const data = await res.json();
      projects = data.data;
  
      // Initialize Draggable carousel
      Draggable.create(carousel, {
        type: 'x',
        inertia: true,
        bounds: carousel.parentElement,
      });
    });
  </script>
  
  <style>
    .carousel-container {
      overflow: hidden;
      width: 100%;
      height: 80vh;
    }
    .carousel {
      display: flex;
      align-items: center;
      cursor: grab;
    }
    .project-card {
      min-width: 300px;
      margin: 0 15px;
      background-color: #1a1a1a;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px #0ff;
      transition: transform 0.3s;
    }
    .project-card:hover {
      transform: scale(1.05);
    }
  </style>
  
  <div class="carousel-container">
    <div bind:this={carousel} class="carousel">
      {#each projects as project}
        <div class="project-card">
          <h2 class="text-neonBlue text-xl mb-2">{project.attributes.title}</h2>
          <p>{project.attributes.description}</p>
        </div>
      {/each}
    </div>
  </div>
  