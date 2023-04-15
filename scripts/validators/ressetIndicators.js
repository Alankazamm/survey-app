import { checkboxInputs, errorsInputs, radioInputs } from "./errorIndicators";
import { age, detailsTxtArea, email, fullname, investSelect, statusSelect } from "./validators";
export const ressetIndicators = (input) => {
    document.querySelectorAll('.after').forEach((el) => el.remove());
    switch (input) {
        case errorsInputs.statusSelect:
            statusSelect.style.border = '';
            break;
        case errorsInputs.radioInputs:
            radioInputs.style.border = '';
            radioInputs.style.borderRadius = '';
            radioInputs.style.padding = '';
            break;
        case errorsInputs.investSelect:
            investSelect.style.border = '';
            break;
        case errorsInputs.checkboxInputs:
            checkboxInputs.style.border = '';
            checkboxInputs.style.borderRadius = '';
            checkboxInputs.style.padding = '';
            break;
        case errorsInputs.detailsTextArea:
            detailsTxtArea.style.border = '';
            break;
        case errorsInputs.emailInput:
            email.style.border = '';
            break;
        case errorsInputs.fullnameInput:
            fullname.style.border = '';
            break;
        case errorsInputs.ageInput:
            age.style.border = '';
            break;
        default:
            break;
    }
};
