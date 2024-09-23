<!-- src/lib/components/Hologram.svelte -->
<script lang="ts">
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    AmbientLight,
    DirectionalLight,
  } from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { onMount } from 'svelte';

  let container: HTMLDivElement;

  onMount(() => {
    // Scene setup
    const scene = new Scene();

    // Camera setup
    const camera = new PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(
      '/models/ai_engineer.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 2, 2); // Adjust scale as needed
        scene.add(model);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01; // Rotate the model
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model', error);
      }
    );

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    // Cleanup on component destroy
    return () => {
      window.removeEventListener('resize', onWindowResize, false);
      container.removeChild(renderer.domElement);
    };
  });
</script>

<style>
  .hologram-container {
    width: 100%;
    height: 400px;
    position: relative;
  }
</style>

<div bind:this={container} class="hologram-container"></div>
