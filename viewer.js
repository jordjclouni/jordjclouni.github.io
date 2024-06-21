// Создаем сцену, камеру и рендерер
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создаем загрузчик C4D файла
const loader = new THREE.C4DLoader();
loader.load('img/aboba.c4d', (object) => {
    scene.add(object.scene);
});

// Устанавливаем начальное положение камеры
camera.position.z = 5;

// Создаем анимацию
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
