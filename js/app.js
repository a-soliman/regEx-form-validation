const nameInput = {
    field: document.getElementById('name'),
    valid: null
};

const zipInput = {
    field: document.getElementById('zip'),
    valid: null
};

const emailInput = {
    field: document.getElementById('email'),
    valid: null
};
const phoneInput = {
    field: document.getElementById('phone'),
    valid: null
};
const submitBtn = document.getElementById('submitBtn');

const inputs = [nameInput, zipInput, emailInput, phoneInput];

inputs.forEach( (input) => {
    input.field.addEventListener('blur', validateInput);
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

    if( testValidation(value, re) == true ) {
        nameInput.valid = true;
        removeInvalidClass(inputField);
    } else {
        nameInput.valid = false;
        addInvalidClass(inputField);
    }
    checkAllInputs();
};

const validateZip = (inputField, value) => {
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if( testValidation(value, re) == true ) {
        zipInput.valid = true;
        removeInvalidClass(inputField);
    } else {
        zipInput.valid = false;
        addInvalidClass(inputField);
    }
    checkAllInputs();
};

const validateEmail = (inputField, value) => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if( testValidation(value, re) == true ) {
        emailInput.valid = true;
        removeInvalidClass(inputField);
    } else {
        emailInput.valid = false;
        addInvalidClass(inputField);
    }
    checkAllInputs();
};

const validatePhone = (inputField, value) => {
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if( testValidation(value, re) == true ) {
        phoneInput.valid = true;
        removeInvalidClass(inputField);
    } else {
        phoneInput.valid = false;
        addInvalidClass(inputField);
    }
    checkAllInputs();
};

const testValidation = (value, re) => {
    return !re.test(value) ? false: true;
};

const addInvalidClass = ( inputField ) => {
    inputField.classList.add('is-invalid');
};

const removeInvalidClass = ( inputField ) => {
    inputField.classList.remove('is-invalid');
};

const checkAllInputs = () => {
    let fail = false;

    inputs.forEach( (input) => {
        if (input.valid != true) {
            fail = true;
        }
    });
    if ( !fail ) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', true);
    }
};

