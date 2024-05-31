var showModeloButtons = document.querySelectorAll('.show-modelo');

showModeloButtons.forEach(function(button) {
    var modelo = button.closest('.modelo');
    var modeloCards = modelo.querySelectorAll('.modelo-card');

    // Oculta las tarjetas al cargar la página
    modeloCards.forEach(function(card) {
        card.style.display = 'none';
    });

    button.addEventListener('click', function() {
        var firstShownCard = null;

        modeloCards.forEach(function(card) {
            if (card.style.display === 'none' || card.style.display === '') {
                card.style.display = 'flex';
                button.textContent = 'Ver más modelos';

                // Guarda la primera tarjeta que se muestra
                if (!firstShownCard) {
                    firstShownCard = card;
                }
            } else {
                card.style.display = 'none';
                button.textContent = 'Ver más colores';
            }
        });

        // Desplaza el navegador hasta la primera tarjeta que se muestra
        if (firstShownCard) {
            firstShownCard.scrollIntoView({behavior: "smooth"});
        }
    });
});

//Envio Formulario
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var whatsappMessage = 'Hola, mi nombre es ' + name + ', mi correo electrónico es ' + email + '. ' + message;

    window.location.href = 'https://wa.me/+573125141329?text=' + encodeURIComponent(whatsappMessage);
});