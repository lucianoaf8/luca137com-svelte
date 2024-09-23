<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import Draggable from 'gsap/Draggable';

  gsap.registerPlugin(Draggable);

  let projects = [];
  let carousel: HTMLDivElement;

  onMount(() => {
    // Use mock data
    projects = [
      {
        id: 1,
        attributes: {
          title: 'Project Alpha',
          description: 'Description for Project Alpha.',
        },
      },
      {
        id: 2,
        attributes: {
          title: 'Project Beta',
          description: 'Description for Project Beta.',
        },
      },
      {
        id: 3,
        attributes: {
          title: 'Project Gamma',
          description: 'Description for Project Gamma.',
        },
      },
      // Add more mock projects as needed
    ];

    // Initialize Draggable carousel
    Draggable.create(carousel, {
      type: 'x',
      bounds: carousel.parentElement,
    });
  });
</script>
