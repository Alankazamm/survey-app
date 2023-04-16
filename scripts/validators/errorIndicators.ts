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
    const ageAfter = document.getElementById('age-after');
    const emailAfter = document.getElementById('email-after');
    const fullnameAfter = document.getElementById('fullname-after');
    
    switch (input) {
        case errorsInputs.emailInput:
            emailAfter!.style.display = 'block';
            setTimeout(() => {
               emailAfter!.style.display = 'none';
            }, 3000);
            break;
        case errorsInputs.fullnameInput:
            fullnameAfter!.style.display = 'block';
            setTimeout(() => {
                fullnameAfter!.style.display = 'none';
            }, 3000);
            break;
        case errorsInputs.ageInput:
            ageAfter!.style.display = 'block';
            setTimeout(() => {
                ageAfter!.style.display = 'none';
            }, 3000);
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