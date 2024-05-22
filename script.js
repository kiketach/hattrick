window.onload = function() {
    var showModeloButton = document.querySelector('.show-modelo');
    var modeloCards = document.querySelectorAll('.modelo-card');

    // Asegúrate de que ambos elementos existen
    if (showModeloButton && modeloCards) {
        // Oculta las tarjetas al cargar la página
        modeloCards.forEach(function(card) {
            card.style.display = 'none';
        });

        showModeloButton.addEventListener('click', function() {
            modeloCards.forEach(function(card) {
                if (card.style.display === 'none' || card.style.display === '') {
                    card.style.display = 'flex';
                    card.scrollIntoView({behavior: "smooth"}); // Desplaza el navegador hasta la tarjeta
                    showModeloButton.textContent = 'Ver menos';
                } else {
                    card.style.display = 'none';
                    showModeloButton.textContent = 'Ver más colores';
                }
            });
        });
    }
};