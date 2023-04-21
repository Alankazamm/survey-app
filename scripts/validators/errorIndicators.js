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
    switch (input) {
        case errorsInputs.emailInput:
            document.getElementById('email-after')?.remove();
            const emailAfter = document.createElement('span');
            emailAfter.setAttribute('id', 'email-after');
            emailAfter.classList.add('after');
            document.getElementById('email').after(emailAfter);
            emailAfter.innerHTML = 'invalid email';
            emailAfter.style.display = 'block';
            setTimeout(() => {
                emailAfter.style.display = 'none';
            }, 3000);
            break;
        case errorsInputs.fullnameInput:
            document.getElementById('fullname-after')?.remove();
            const fullnameAfter = document.createElement('span');
            fullnameAfter.setAttribute('id', 'fullname-after');
            fullnameAfter.classList.add('after');
            fullnameAfter.innerHTML = 'invalid name format';
            document.getElementById('fullname').after(fullnameAfter);
            fullnameAfter.style.display = 'block';
            setTimeout(() => {
                fullnameAfter.style.display = 'none';
            }, 3000);
            break;
        case errorsInputs.ageInput:
            document.getElementById('age-after')?.remove();
            const ageAfter = document.createElement('span');
            ageAfter.setAttribute('id', 'age-after');
            ageAfter.classList.add('after');
            ageAfter.innerHTML = 'invalid age, must be between 18 and 99';
            document.getElementById('age').after(ageAfter);
            ageAfter.style.display = 'block';
            setTimeout(() => {
                ageAfter.style.display = 'none';
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
