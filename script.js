let scene, camera, renderer, controls, model;

init();
animate();

function init() {
    // Escena
    scene = new THREE.Scene();

    // Cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    // Renderizador
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Controles de órbita
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Cargar modelo 3D
    const loader = new THREE.GLTFLoader();
    loader.load('assets/model.glb', function (gltf) {
        model = gltf.scene;
        scene.add(model);
    });

    // Cargar texturas
    document.getElementById('shirtTexture').addEventListener('change', function (event) {
        applyTexture(event.target.files[0], 'shirt');
    });

    document.getElementById('pantsTexture').addEventListener('change', function (event) {
        applyTexture(event.target.files[0], 'pants');
    });
}

function applyTexture(file, part) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const texture = new THREE.TextureLoader().load(e.target.result);
        if (model) {
            model.traverse((child) => {
                if (child.isMesh && child.name.includes(part)) {
                    child.material.map = texture;
                    child.material.needsUpdate = true;
                }
            });
        }
    };
    reader.readAsDataURL(file);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
