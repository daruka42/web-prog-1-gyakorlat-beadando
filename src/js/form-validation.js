document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
        
        let isValid = true;
        
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            document.getElementById('nameError').textContent = 'A név megadása kötelező';
            isValid = false;
        } else if (name.value.trim().length < 10) {
            document.getElementById('nameError').textContent = 'A névnek legalább 10 karakter hosszúnak kell lennie';
            isValid = false;
        }
        
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Az email megadása kötelező';
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            document.getElementById('emailError').textContent = 'Érvényes email címet adjon meg';
            isValid = false;
        }
        
        const phone = document.getElementById('phone');
        if (phone.value.trim() === '') {
            document.getElementById('phoneError').textContent = 'A telefonszám megadása kötelező';
            isValid = false;
        }
        
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            document.getElementById('messageError').textContent = 'Az üzenet megadása kötelező';
            isValid = false;
        } else if (message.value.trim().length < 10) {
            document.getElementById('messageError').textContent = 'Az üzenetnek legalább 10 karakter hosszúnak kell lennie';
            isValid = false;
        }
        
        const gender = document.getElementById('gender');
        if (gender.value === '') {
            document.getElementById('genderError').textContent = 'A nem kiválasztása kötelező';
            isValid = false;
        }
        
        if (isValid) {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
        }
    });
});