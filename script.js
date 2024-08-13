window.onload = function() {
    var showModeloButtons = document.querySelectorAll('.show-modelo');
    var modeloCardContainers = document.querySelectorAll('.modelo-grid');

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

function openModal(image) {
    document.getElementById('modalImage').src = image;
}

function openModal(image) {
    document.getElementById('modalImage').src = image;
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
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


// boton de inicio
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Mostrar/ocultar el botón según el scroll del usuario
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Mostrar el botón cuando el scroll es mayor a 300px
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Scroll suave al hacer clic en el botón
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
