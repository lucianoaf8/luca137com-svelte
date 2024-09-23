<!-- src/lib/components/ContactIcons.svelte -->
<script lang="ts">
  import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<div class="flex space-x-6 mt-6">
  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon
      class="text-neonGreen text-4xl transition-transform transform hover:scale-110"
      style="filter: drop-shadow(0 0 5px #0f0);"
      icon={faLinkedin}
    />
  </a>
  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon
      class="text-neonGreen text-4xl transition-transform transform hover:scale-110"
      style="filter: drop-shadow(0 0 5px #0f0);"
      icon={faGithub}
    />
  </a>
  <a href="mailto:youremail@example.com">
    <FontAwesomeIcon
      class="text-neonGreen text-4xl transition-transform transform hover:scale-110"
      style="filter: drop-shadow(0 0 5px #0f0);"
      icon={faEnvelope}
    />
  </a>
</div>
