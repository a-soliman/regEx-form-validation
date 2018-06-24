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
    else if ( id == 'zip' ) { validateZip(value); }
    else if ( id == 'email' ) { validateEmail(value); }
    else if ( id == 'phone' ) { validatePhone(value); }
}

const validateName = (inputField, value) => {
    const re = /^[a-zA-Z]{2,10}$/;

    if ( !re.test(value) ) {
        inputField.classList.add('is-invalid');
    } else {
        inputField.classList.remove('is-invalid');
    }

};

const validateZip = (value) => {

};

const validateEmail = (value) => {

};

const validatePhone = (value) => {

};
