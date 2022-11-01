<script>
    import * as THREE from 'three';
    import {Canvas, PerspectiveCamera, OrbitControls, DirectionalLight, AmbientLight} from 'svelte-cubed';
    import Pumpkin from "../lib/components/3d-pumpkin/Pumpkin.svelte";
</script>
<Canvas
        background={new THREE.Color("black")}
>
    <PerspectiveCamera
            position={[0, 0, 200]}
    />

    <OrbitControls
            enabled={false}
            autoRotate={true}
            autoRotateSpeed={7}
    />

    <DirectionalLight
            color={new THREE.Color(0xffffff)}
            position={[0, 10, 10]}
            intensity={0.75}
            shadow={false}
    />
    <AmbientLight
            color={new THREE.Color(0xffffff)}
            intensity={0.75}
    />
    <Pumpkin />
</Canvas>