document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('confirmationMessage').textContent = `¡Gracias, ${name}! Hemos recibido tu mensaje: "${message}". Wil y Ardy se pondrán en contacto contigo en ${email} pronto.`;
    document.getElementById('confirmationMessage').classList.remove('hidden');

    // Clear the form
    document.getElementById('contactForm').reset();
});
