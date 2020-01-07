function validateForm() {
    const emailIsValid = validateInput("email", emailIsValidFn);
    const passwordIsValid = validateInput("password", passwordIsValidFn);
    const colourIsValid = validateInput("colour", valueIsNotEmptyFn);
    const animalsAreValid = validateMinCheckboxesSelected("animal", 2);
    const tigerIsChecked = document.getElementById("tiger").checked;
    const tigerTypeIsValid = !tigerIsChecked || validateInput("tiger_type", valueIsNotEmptyFn);
    return emailIsValid && passwordIsValid && colourIsValid && animalsAreValid && tigerTypeIsValid;
}

function validateInput(inputId, validateFn){
    const input = document.getElementById(inputId);
    const isValid = validateFn(input.value);
    setErrorStateFn(input.parentElement, isValid, input);
    return isValid;
}

function validateMinCheckboxesSelected(checkboxName, minSelectedCount){
    const boxes = document.getElementsByName(checkboxName);
    let selectedCount = 0;
    boxes.forEach((b) => { selectedCount += (b.checked ? 1 : 0)} );
    const isValid = selectedCount >= minSelectedCount;
    setErrorStateFn(boxes[0].parentElement, isValid);
    return isValid;
}

const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
const emailIsValidFn = (email) => {
    return EMAIL_REGEX.test(email);
}

const passwordIsValidFn = (password) => {
    return Boolean(password && password.length > 8);
}

const valueIsNotEmptyFn = (value) => {
    return Boolean(value && value.length > 0);
}

const setErrorStateFn = (parentElement, isValid, inputElement) => {
    if (inputElement) {
        inputElement.setAttribute("aria-invalid", !isValid);
    }
    if (isValid) {
        parentElement.classList.remove("error");
    } else {
        parentElement.classList.add("error");
    }
}