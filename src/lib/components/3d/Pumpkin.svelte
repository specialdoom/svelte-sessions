<script>
  import { Primitive } from "svelte-cubed";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { onMount } from "svelte";

  const modelURL = "halloween_pumpkin.glb";
  let model = null;

  function loadGLTF() {
    const loader = new GLTFLoader();
    return loader.loadAsync(modelURL);
  }

  onMount(() => {
    loadGLTF().then((_model) => (model = _model));
  });
</script>

{#if model}
  <Primitive object={model.scene} position={[0, -40, 0]} scale={0.5} />
{/if}
