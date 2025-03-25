let currentIndex = 0; // Índice do slide atual

// Função para mover o slide
function moveSlide(step) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel img'); // Pega todas as imagens do carrossel
  const totalSlides = slides.length; // Total de slides

  // Atualiza o índice com base no passo (1 ou -1)
  currentIndex += step;

  // Verifica se o índice saiu dos limites e ajusta para o primeiro ou o último slide
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Vai para o último slide
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Vai para o primeiro slide
  }

  // Calcula a largura de cada slide (imagens) e move o carrossel para a posição correta
  const slideWidth = slides[0].clientWidth; 
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Move o carrossel
}

// Configuração para auto slide a cada 5 segundos
setInterval(() => {
  moveSlide(1); // Passa para o próximo slide a cada 5 segundos
}, 5000);
