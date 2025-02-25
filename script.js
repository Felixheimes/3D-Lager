// Initialize Three.js Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa); // Light gray background

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Attach renderer correctly
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 5;
controls.maxDistance = 100;

// Camera Position
camera.position.set(30, 20, 50);
camera.lookAt(0, 10, 0);

// Grid Helper (Check If Scene Is Rendering)
const gridHelper = new THREE.GridHelper(100, 20);
scene.add(gridHelper);

// Function to Create 3D Boxes
function createBox(x, y, z) {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const box = new THREE.Mesh(geometry, material);
    box.position.set(x, y, z);
    return box;
}

// Add One Box for Testing
const testBox = createBox(0, 5, 0);
scene.add(testBox);

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();



