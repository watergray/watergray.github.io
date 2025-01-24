// Lista de personajes con sus videos e íconos
const characters = [
  { 
    name: "물", 
    videoSrc: "assets/characters/gato.webm", 
    iconSrc: "assets/gatoicon.webm" 
  },
  { 
    name: "Conejo", 
    videoSrc: "assets/characters/conejo.webm", 
    iconSrc: "assets/conejoicon.webm" 
  }
];

let currentIndex = 0;

// Referencias al DOM
const videoElement = document.getElementById("character-video");
const characterName = document.getElementById("character-name");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const gallery = document.querySelector(".gallery");

// Función para actualizar el video y el nombre
function updateCharacter(index) {
  const character = characters[index];
  videoElement.src = character.videoSrc;
  characterName.textContent = character.name;
}

// Crear la galería de íconos con el background
function createGallery() {
  characters.forEach((character, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Fondo detrás del ícono
    const background = document.createElement("div");
    background.classList.add("background");

    // Ícono del personaje
    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = character.iconSrc;
    icon.alt = character.name;

    card.appendChild(background);
    card.appendChild(icon);

    // Evento de clic en la tarjeta
    card.addEventListener("click", () => {
      currentIndex = index;
      updateCharacter(currentIndex);
      playSound();
    });

    gallery.appendChild(card);
  });
}

// Navegar hacia el personaje anterior
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  updateCharacter(currentIndex);
  playSound();
});

// Navegar hacia el siguiente personaje
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % characters.length;
  updateCharacter(currentIndex);
  playSound();
});

// Reproducir sonido al cambiar de personaje
function playSound() {
  const audio = new Audio("assets/click.ogg");
  audio.play();
}

// Inicializar la página
createGallery();
updateCharacter(currentIndex);
