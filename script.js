// script.js
const characters = [
    {
        name: "고양이",
        video: "assets/character/gato.webm",
        icon: "assets/gatoicon.webm"
    },
    {
        name: "토끼",
        video: "assets/character/conejo.webm",
        icon: "assets/conejoicon.webm"
    }
];

let currentIndex = 0;

// Elementos
const characterVideo = document.getElementById("character-video");
const characterName = document.getElementById("character-name");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const clickSound = document.getElementById("click-sound");

// Función para actualizar el personaje
function updateCharacter(index) {
    const character = characters[index];
    characterVideo.src = character.video;
    characterName.textContent = character.name;
}

// Avanzar o retroceder en la lista
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
