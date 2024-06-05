window.onload = function() {
    var showModeloButtons = document.querySelectorAll('.show-modelo');
    var modeloCardContainers = document.querySelectorAll('.modelo-grid'); // Cambiado a .modelo-grid

    // Inicialmente ocultar todas las tarjetas de modelo
    modeloCardContainers.forEach(container => {
        var cards = container.querySelectorAll('.modelo-card');
        cards.forEach(card => card.style.display = 'none');
    });

    showModeloButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            var cards = modeloCardContainers[index].querySelectorAll('.modelo-card');
            var areCardsVisible = Array.from(cards).some(card => card.style.display !== 'none');

            if (areCardsVisible) {
                // Si las tarjetas están visibles, las ocultamos y cambiamos el texto del botón
                cards.forEach(card => card.style.display = 'none');
                button.textContent = 'Ver más colores';
            } else {
                // Si las tarjetas están ocultas, las mostramos y cambiamos el texto del botón
                cards.forEach(card => card.style.display = 'block');
                button.textContent = 'Ver menos colores';
            }
        });
    });
}

//Envio Formulario
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var whatsappMessage = 'Hola, mi nombre es ' + name + ', mi correo electrónico es ' + email + '. ' + message;

    window.location.href = 'https://wa.me/+573125141329?text=' + encodeURIComponent(whatsappMessage);
});