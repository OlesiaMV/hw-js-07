'use strict';

const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.getAttribute('data-length');

function value() {
    validationInput.classList.add('invalid');
    if (validationInput.value.length == inputLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
}

validationInput.addEventListener('blur', value);


