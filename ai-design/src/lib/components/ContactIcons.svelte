<!-- src/lib/components/ContactIcons.svelte -->
<script lang="ts">
    import { FaBrandsLinkedin, FaBrandsGithub, FaSolidEnvelope } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  </script>
  
  <style>
    .icon {
      @apply text-neonGreen text-4xl transition-transform transform hover:scale-110;
      filter: drop-shadow(0 0 5px #0f0);
    }
  </style>
  
  <div class="flex space-x-6 mt-6">
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon class="icon" icon={FaBrandsLinkedin} />
    </a>
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon class="icon" icon={FaBrandsGithub} />
    </a>
    <a href="mailto:youremail@example.com">
      <FontAwesomeIcon class="icon" icon={FaSolidEnvelope} />
    </a>
  </div>
  