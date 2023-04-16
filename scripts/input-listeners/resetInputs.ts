import { age, detailsTxtArea, email, fullname, investCheckboxes, investSelect, statusRadios, statusSelect } from "../validators/validators"
import { countDisplayer } from "./textAreaCounter";

export const resetInputs = (): void => {
    statusSelect!.value = '1';
    statusRadios!.forEach(radio => radio.checked = false);
    investSelect!.value = '1';
    investCheckboxes!.forEach(checkbox => checkbox.checked = false);
    detailsTxtArea!.value = '';
    email!.value = '';
    fullname!.value = '';
    age!.value = '';
    countDisplayer!.textContent = '0/130';
}
