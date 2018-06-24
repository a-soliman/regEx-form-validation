const nameInput     = document.getElementById('name');
const zipInput      = document.getElementById('zip');
const emailInput    = document.getElementById('email');
const phoneInput    = document.getElementById('phone');

const inputs = [nameInput, zipInput, emailInput, phoneInput];
inputs.forEach( (input) => {
    input.addEventListener('blur', validateInput);
});

function validateInput(e) {
    const inputField = e.target;
    const value = e.target.value.trim();
    const id = inputField.id;
    
    if ( id == 'name' ) { validateName(inputField, value); }
    else if ( id == 'zip' ) { validateZip(inputField, value); }
    else if ( id == 'email' ) { validateEmail(inputField, value); }
    else if ( id == 'phone' ) { validatePhone(inputField, value); }
}

const validateName = (inputField, value) => {
    const re = /^[a-zA-Z]{2,10}$/;

    testValidation(inputField, value, re);
};

const validateZip = (inputField, value) => {
    const re= /^[0-9]{5}(-[0-9]{4})?$/;

    testValidation(inputField, value, re);
};

const validateEmail = (inputField, value) => {
    const re= //;

    testValidation(inputField, value, re);
};

const validatePhone = (inputField, value) => {
    const re= //;

    testValidation(inputField, value, re);
};

const testValidation = (inputField, value, re) => {
    if ( !re.test(value) ) {
        inputField.classList.add('is-invalid');
    } else {
        inputField.classList.remove('is-invalid');
    }

    return;
};
