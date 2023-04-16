import { age, detailsTxtArea, email, fullname, investSelect, statusSelect } from "./validators";
const errorBorderStyle = '1px solid rgba(231, 90, 90, 0.65)';
export var errorsInputs;
(function (errorsInputs) {
    errorsInputs["statusSelect"] = "statusSelect";
    errorsInputs["radioInputs"] = "radioInputs";
    errorsInputs["investSelect"] = "investSelect";
    errorsInputs["checkboxInputs"] = "checkboxInputs";
    errorsInputs["detailsTextArea"] = "detailsTextArea";
    errorsInputs["emailInput"] = "emailInput";
    errorsInputs["fullnameInput"] = "fullnameInput";
    errorsInputs["ageInput"] = "ageInput";
})(errorsInputs || (errorsInputs = {}));
export const checkboxInputs = document.getElementById('checkboxInputs');
export const radioInputs = document.getElementById('radioInputs');
//create an after element to say what is wrong for email input
export const createAfterElement = (input) => {
    const afterElement = document.createElement('span');
    afterElement.classList.add('after');
    switch (input) {
        case errorsInputs.emailInput:
            afterElement.textContent = 'Invalid email format';
            email?.querySelector('.after')?.remove();
            if (email.getElementsByClassName('after').length === 0)
                email.after(afterElement);
            setTimeout(() => {
                afterElement.remove();
            }, 3000);
            break;
        case errorsInputs.fullnameInput:
            afterElement.textContent = 'Invalid name format, name must be at least 2 characters long';
            fullname?.querySelector('.after')?.remove();
            fullname.after(afterElement);
            setTimeout(() => {
                afterElement.remove();
            }, 3000);
            break;
        case errorsInputs.ageInput:
            afterElement.textContent = 'Invalid age format, age must be between 18 and 99';
            age.after(afterElement);
            setTimeout(() => {
                afterElement.remove();
            }, 3000);
            break;
        default:
            break;
    }
};
export const errorIndicators = (input) => {
    switch (input) {
        case errorsInputs.statusSelect:
            statusSelect.style.border = errorBorderStyle;
            break;
        case errorsInputs.radioInputs:
            radioInputs.style.border = errorBorderStyle;
            radioInputs.style.borderRadius = '5px';
            // radioInputs!.style.padding = '5px';
            break;
        case errorsInputs.investSelect:
            investSelect.style.border = errorBorderStyle;
            break;
        case errorsInputs.checkboxInputs:
            checkboxInputs.style.border = errorBorderStyle;
            checkboxInputs.style.borderRadius = '5px';
            // checkboxInputs!.style.padding = '5px';
            break;
        case errorsInputs.detailsTextArea:
            detailsTxtArea.style.border = errorBorderStyle;
            break;
        case errorsInputs.emailInput:
            email.style.border = errorBorderStyle;
            createAfterElement(input);
            break;
        case errorsInputs.fullnameInput:
            fullname.style.border = errorBorderStyle;
            createAfterElement(input);
            break;
        case errorsInputs.ageInput:
            age.style.border = errorBorderStyle;
            createAfterElement(input);
            break;
        default:
            break;
    }
};
