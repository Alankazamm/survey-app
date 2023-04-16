import { createForm } from "../data-handlers/filledInfos";
import { mountModal } from "../modals/error-modal/modalEvents";
import navigate from "../navigation/navigation";
import { errorIndicators, errorsInputs } from "./errorIndicators";
// filled form infos
// inputs from status page
export const statusSelect = document
    .querySelector('#status-select');
export const statusRadios = document
    .querySelectorAll('input[name="markets"]');
// inputs from invest page
export const investSelect = document
    .querySelector('#invest-select');
export const investCheckboxes = document
    .querySelectorAll('input[type="checkbox"]');
// input from details page
export const detailsTxtArea = document
    .querySelector('#details-textarea');
// input from contact page
export const email = document
    .querySelector('#email');
export const fullname = document
    .querySelector('#fullname');
export const age = document
    .querySelector('#age');
//in case of invalid form inputs, show one of those messages
var validatorTexts;
(function (validatorTexts) {
    validatorTexts["status"] = "Please select the status of your account and the market in which you operate, or click the skip button.";
    validatorTexts["invest"] = "Please select at least one resource you use for training and indicate how you decide to invest, or click the skip button.";
    validatorTexts["details"] = "Please send us more details in order to optimize the survey, or click the skip button.";
    validatorTexts["contact"] = "Please fill in your contact information correctly!";
})(validatorTexts || (validatorTexts = {}));
// get radio/checkbox values
let radioValue = '';
let checkboxValue = [];
// 
const formHandler = () => {
    const infos = {
        name: fullname.value,
        email: email.value,
        age: age.value,
        status: statusSelect?.value || '',
        market: radioValue || '',
        invest: investSelect?.value || '',
        resources: checkboxValue,
        details: detailsTxtArea?.value || '',
    };
    createForm(infos);
    navigate('sucess');
};
export const validateHandler = (buttonId) => {
    switch (buttonId) {
        case 'next-status':
            radioValue = '';
            statusRadios?.forEach(radio => radio.checked ? radioValue = radio.value : null);
            statusSelect.value === '1' && errorIndicators(errorsInputs['statusSelect']);
            radioValue === '' && errorIndicators(errorsInputs.radioInputs);
            statusSelect.value !== '1' && radioValue !== '' ?
                navigate('invest') :
                mountModal(validatorTexts.status);
            break;
        case 'next-invest':
            checkboxValue = [];
            investCheckboxes?.forEach(checkbox => checkbox.checked ? checkboxValue.push(checkbox.value) : null);
            investSelect?.value === '1' && errorIndicators(errorsInputs.investSelect);
            checkboxValue.length <= 0 && errorIndicators(errorsInputs.checkboxInputs);
            investSelect?.value !== '1' && checkboxValue.length > 0 ?
                navigate('details') :
                mountModal(validatorTexts.invest);
            break;
        case 'next-details':
            let detailsValid = false;
            typeof detailsTxtArea?.value?.length === 'number'
                && detailsTxtArea?.value?.length > 0 ?
                detailsValid = true : detailsValid = false;
            detailsValid && navigate('contact');
            if (!detailsValid) {
                mountModal(validatorTexts.details);
                errorIndicators(errorsInputs.detailsTextArea);
            }
            break;
        case 'next-contact':
            const fullNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullname.value);
            const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value);
            const ageValid = parseInt(age.value) > 0 && parseInt(age.value) < 100;
            !fullNameValid && errorIndicators(errorsInputs.fullnameInput);
            !emailValid && errorIndicators(errorsInputs.emailInput);
            !ageValid && errorIndicators(errorsInputs.ageInput);
            fullNameValid && emailValid && ageValid ?
                formHandler() :
                mountModal(validatorTexts.contact);
    }
};
