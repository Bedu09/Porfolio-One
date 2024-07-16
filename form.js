document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formEntries = Object.fromEntries(formData.entries());

    // Validación de los campos
    if (!formEntries.nombre || !formEntries.email || !formEntries.asunto || !formEntries.mensaje) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Aquí puedes enviar los datos a un servidor usando fetch o XMLHttpRequest
    fetch('URL_DE_TU_SERVIDOR', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        alert('Mensaje enviado exitosamente.');
        contactForm.reset(); // Resetea el formulario
      })
      .catch(error => {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar el formulario. Por favor, intente nuevamente.');
      });
  });
});

