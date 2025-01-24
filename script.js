// script.js
const characters = [
    {
        video: "assets/character/gato.webm",
        name: "Gato",
        description: "Siempre encuentra su camino, no importa qué tan oscuro sea."
    },
    {
        video: "assets/character/conejo.webm",
        name: "Conejo",
        description: "Rápido, ágil y siempre un paso adelante."
    }
];

let currentIndex = 0;

// Elementos
const characterVideo = document.getElementById("character-video");
const characterName = document.getElementById("character-name");
const characterDescription = document.getElementById("character-description");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const clickSound = document.getElementById("click-sound");

// Función para actualizar el personaje
function updateCharacter(index) {
    const character = characters[index];
    characterVideo.src = character.video;
    characterName.textContent = character.name;
    characterDescription.textContent = character.description;
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
