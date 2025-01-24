// script.js
const characters = [
    { video: "assets/character/gato.webm" },
    { video: "assets/character/conejo.webm" }
];

let currentIndex = 0;

// Elementos
const characterVideo = document.getElementById("character-video");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const clickSound = document.getElementById("click-sound");

// Función para actualizar el video
function updateCharacter(index) {
    const character = characters[index];
    characterVideo.src = character.video;
}

// Cambiar personaje con los botones
function changeCharacter(direction) {
    clickSound.play();
    if (direction === "left") {
        currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    } else if (direction === "right") {
        currentIndex = (currentIndex + 1) % characters.length;
    }
    updateCharacter(currentIndex);
}

// Listeners para los botones
leftButton.addEventListener("click", () => changeCharacter("left"));
rightButton.addEventListener("click", () => changeCharacter("right"));

// Inicialización
updateCharacter(currentIndex);
