const starContainer = document.querySelector('.stars');
const numberOfStars = 300; // Ajusta según lo que desees

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Tamaño aleatorio entre 1px y 3px
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  
  // Posición aleatoria en la pantalla después del espacio vacío
  star.style.top = `${Math.random() * 475}vh`; // Esto asegura que solo estén en la sección de estrellas
  star.style.left = `${Math.random() * 175}vw`;

  // Opacidad aleatoria para simular diferentes brillos
  star.style.opacity = Math.random();

  // Añadir la estrella al contenedor
  starContainer.appendChild(star);

  // Animación de parpadeo
  const twinkleDuration = Math.random() * 5 + 2;
  star.style.animation = `twinkle ${twinkleDuration}s infinite ease-in-out`;
}

// Crear estrellas en la sección con estrellas
for (let i = 0; i < numberOfStars; i++) {
  createStar();
}
