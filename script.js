var showModeloButtons = document.querySelectorAll('.show-modelo');

showModeloButtons.forEach(function(button) {
    var modelo = button.closest('.modelo');
    var modeloCards = modelo.querySelectorAll('.modelo-card');

    // Oculta las tarjetas al cargar la página
    modeloCards.forEach(function(card) {
        card.style.display = 'none';
    });

    button.addEventListener('click', function() {
        modeloCards.forEach(function(card) {
            if (card.style.display === 'none' || card.style.display === '') {
                card.style.display = 'flex';
                card.scrollIntoView({behavior: "smooth"}); // Desplaza el navegador hasta la card
                button.textContent = 'Ver más modelos';
            } else {
                card.style.display = 'none';
                button.textContent = 'Ver más colores';
            }
        });
    });
});