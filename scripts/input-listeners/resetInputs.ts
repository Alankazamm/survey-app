import { age, detailsTxtArea, email, fullname, investCheckboxes, investSelect, statusRadios, statusSelect } from "../validators/validators"

export const resetInputs = () => {
    statusSelect!.value = '1';
    statusRadios!.forEach(radio => radio.checked = false);
    investSelect!.value = '1';
    investCheckboxes!.forEach(checkbox => checkbox.checked = false);
    detailsTxtArea!.value = '';
    email!.value = '';
    fullname!.value = '';
    age!.value = '';
}
