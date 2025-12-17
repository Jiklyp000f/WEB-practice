const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageArea = document.getElementById('messageArea');

function showMessage(message, isError = true) {
    messageArea.textContent = message;
    messageArea.className = isError ? 'error' : 'success';
}

function resetInputStyles() {
    nameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
}

function setInputError(inputElement) {
    inputElement.classList.add('input-error');
}

contactForm.onsubmit = function(event) {
    event.preventDefault();
    
    resetInputStyles();
    
    let hasError = false;
    
    if (nameInput.value.trim() === '') {
        setInputError(nameInput);
        hasError = true;
    }
    
    if (emailInput.value.trim() === '') {
        setInputError(emailInput);
        hasError = true;
    }
    
    if (hasError) {
        showMessage('Пожалуйста, заполните все поля формы');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        setInputError(emailInput);
        showMessage('Пожалуйста, введите корректный email адрес');
        return;
    }
    
    const formData = new FormData(contactForm);
    const formObject = {};
    
    formObject.name = nameInput.value.trim();
    formObject.email = emailInput.value.trim();
    
    console.log('Данные формы:');
    console.log('- Имя:', formObject.name);
    console.log('- Email:', formObject.email);
    
    showMessage('Форма успешно отправлена!', false);
    
    nameInput.value = '';
    emailInput.value = '';
    
    nameInput.focus();
};

nameInput.oninput = function() {
    this.classList.remove('input-error');
};

emailInput.oninput = function() {
    this.classList.remove('input-error');
};