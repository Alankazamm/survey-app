import { createForm, Infos } from "../data-handlers/filledInfos";
import { mountModal } from "../modal/modalEvents";
import navigate from "../navigation/navigation";
import { errorIndicators, errorsInputs } from "./errorIndicators";
type input = HTMLInputElement | null;
type multInput = NodeListOf<HTMLInputElement>;

// filled form infos

// inputs from status page
export const statusSelect: input = document
    .querySelector('#status-select');
export const statusRadios: multInput = document
    .querySelectorAll('input[name="markets"]');

// inputs from invest page
export const investSelect: input = document
    .querySelector('#invest-select');
export const investCheckboxes: multInput = document
    .querySelectorAll('input[type="checkbox"]');

// input from details page
export const detailsTxtArea: input = document
    .querySelector('#details-textarea');

// input from contact page
export const email: input = document
    .querySelector('#email')!;
export const fullname: input = document
    .querySelector('#fullname')!;
export const age: input = document
    .querySelector('#age')!;

//in case of invalid form inputs, show one of those messages
enum validatorTexts {
    status = 'Please select the status of your account and the market in which you operate, or click the skip button.',
    invest = 'Please select at least one resource you use for training and indicate how you decide to invest, or click the skip button.',
    details = 'Please send us more details in order to optimize the survey, or click the skip button.',
    contact = 'Please fill in your contact information correctly!',
}

// get radio/checkbox values
let radioValue = '';
let checkboxValue: string[] = [];
// 
const formHandler = () => {
    const infos: Infos = {
        name: fullname.value,
        email: email.value,
        age: age.value,
        status: statusSelect?.value || '',
        market: radioValue || '',
        invest: investSelect?.value || '',
        resources: checkboxValue,
        details: detailsTxtArea?.value || '',
    }
    createForm(infos);
    navigate('sucess');
}
export const validateHandler = (buttonId: string) => {
    switch (buttonId) {
        case 'next-status':
            radioValue = '';
            statusRadios?.forEach(radio => radio.checked ? radioValue = radio.value : null);
            statusSelect!.value === '1' && errorIndicators(errorsInputs['statusSelect']);
            radioValue === '' && errorIndicators(errorsInputs.radioInputs);
            statusSelect!.value !== '1' && radioValue !== '' ?
                navigate('invest') :
                mountModal(validatorTexts.status);
            break;

        case 'next-invest':
            checkboxValue = [];
            investCheckboxes?.forEach(checkbox => checkbox.checked ? checkboxValue.push(checkbox.value) : null);
            investSelect?.value === '1' && errorIndicators(errorsInputs.investSelect)
            checkboxValue.length <= 0 && errorIndicators(errorsInputs.checkboxInputs)
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
                mountModal(validatorTexts.details) 
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
}