// Inicialización del carrusel
document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
      interval: 5000, // Cambiar a la cantidad de milisegundos que deseas que cada slide se muestre antes de cambiar al siguiente.
      pause: 'hover' // Pausar el carrusel cuando se pase el mouse sobre él.
    });
  });
  