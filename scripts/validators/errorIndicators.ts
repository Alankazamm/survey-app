import { age, detailsTxtArea, email, fullname, investSelect, statusSelect } from "./validators"
const errorBorderStyle = '1px solid rgba(231, 90, 90, 0.65)'
export enum errorsInputs {
    statusSelect = 'statusSelect',
    radioInputs = 'radioInputs',
    investSelect = 'investSelect',
    checkboxInputs = 'checkboxInputs',
    detailsTextArea = 'detailsTextArea',
    emailInput = 'emailInput',
    fullnameInput = 'fullnameInput',
    ageInput = 'ageInput'
}

export const checkboxInputs = document.getElementById('checkboxInputs')
export const radioInputs = document.getElementById('radioInputs')

//create an after element to say what is wrong for email input
export const createAfterElement = (input: errorsInputs) => {
    const afterElement = document.createElement('span');
    afterElement.classList.add('after');
    switch (input) {
        case errorsInputs.emailInput:
            afterElement.textContent = 'Invalid email format';
            email!.after(afterElement);
            break;
        case errorsInputs.fullnameInput:
            afterElement.textContent = 'Invalid name format, name must be at least 2 characters long';
            fullname!.after(afterElement);
            break;
        case errorsInputs.ageInput:
            afterElement.textContent = 'Invalid age format, age must be between 18 and 99';
            age!.after(afterElement);
            break;
        default:
            break;
    }
}
export const errorIndicators = (input:errorsInputs) => {
    switch (input) {
        case errorsInputs.statusSelect:
            statusSelect!.style.border = errorBorderStyle;
            break;
        case errorsInputs.radioInputs:
            radioInputs!.style.border = errorBorderStyle;
            radioInputs!.style.borderRadius = '5px';
            // radioInputs!.style.padding = '5px';
            break;
        case errorsInputs.investSelect:
            investSelect!.style.border = errorBorderStyle;
            break;
        case errorsInputs.checkboxInputs:
            checkboxInputs!.style.border = errorBorderStyle;
            checkboxInputs!.style.borderRadius = '5px';
            // checkboxInputs!.style.padding = '5px';
            break;
        case errorsInputs.detailsTextArea:
            detailsTxtArea!.style.border = errorBorderStyle;
            break;
        case errorsInputs.emailInput:
            email!.style.border = errorBorderStyle;
            createAfterElement(input);
            break;
        case errorsInputs.fullnameInput:
            fullname!.style.border = errorBorderStyle;
            createAfterElement(input);
            break;
        case errorsInputs.ageInput:
            age!.style.border = errorBorderStyle;
            createAfterElement(input);
            break;
        default:
            break;
    }
}