// src/types/three-examples.d.ts
declare module 'three/examples/jsm/loaders/GLTFLoader.js' {
  import { Loader, LoadingManager, Group } from 'three';
  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }

  export interface GLTF {
    scene: Group;
    // Add other properties as needed
  }
}

declare module 'three/examples/jsm/controls/OrbitControls.js' {
  import { Camera, EventDispatcher } from 'three';
  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);
    enableDamping: boolean;
    dampingFactor: number;
    update(): void;
    // Add other properties and methods as needed
  }
}
