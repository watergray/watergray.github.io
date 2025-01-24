// Lista de personajes con sus videos y URLs de íconos
const characters = [
  { 
    name: "물", 
    videoSrc: "assets/characters/gato.webm", 
    iconUrl: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-4A6B809D835C03042871C7B5D02C36ED-Png/150/150/AvatarHeadshot/Webp/noFilter" 
  },
  { 
    name: "Conejo", 
    videoSrc: "assets/characters/conejo.webm", 
    iconUrl: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-296AB88C41315EF69508E69D3CB07A20-Png/150/150/AvatarHeadshot/Webp/noFilter" 
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

// Crear la galería de íconos dinámicamente
function createGallery() {
  characters.forEach((character, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = character.iconUrl;
    icon.alt = character.name;

    card.appendChild(icon);

    // Agregar evento de clic para cambiar al personaje correspondiente
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
