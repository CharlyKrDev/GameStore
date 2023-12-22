document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validarFormulario()) {
            Swal.fire({
                icon: "success",
                title: "Enviado",
                text: "Gracias por contactarse, te responderemos a la brevedad.",
                background: 'rgb(11, 219, 4)',
                color: 'white',
                position: 'top-start',
                toast: 'position',
                didClose: () => {
                    contactForm.submit();
                }
            });
        }
    });


    function validarFormulario() {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        

        if (/^\s*$/.test(messageInput.value)) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El mensaje no puede estar vacio",
                background: 'rgb(153, 0, 255)',
                color: 'white',
                position: 'top-start',
                toast: 'position',


            });
            return false;
        }

        if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/.test(nameInput.value)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, ingrese solo letras en el campo de nombre.", background: 'rgb(153, 0, 255)',
                color: 'white',
                position: 'top-start',
                toast: 'position',

            });
            return false;
        }

        if (!/^\d+$/.test(phoneInput.value)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, ingrese solo números en el campo de número de contacto.",
                background: 'rgb(153, 0, 255)',
                color: 'white',
                position: 'top-start',
                toast: 'position',

            });
            return false;
        }


        return true;
    }
});