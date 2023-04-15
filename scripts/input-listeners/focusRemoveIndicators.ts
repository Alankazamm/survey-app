import { checkboxInputs, errorsInputs, radioInputs } from "../validators/errorIndicators"
import { ressetIndicators } from "../validators/ressetIndicators"
import { age, detailsTxtArea, email, fullname, investCheckboxes, investSelect, statusRadios, statusSelect } from "../validators/validators"



investCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('focus', () => {
        ressetIndicators(errorsInputs.checkboxInputs)
    })
})


statusRadios.forEach((radio) => {
    radio.addEventListener('focus', () => {
        ressetIndicators(errorsInputs.radioInputs)
    })
})

statusSelect?.addEventListener('focus', () => {
    ressetIndicators(errorsInputs.statusSelect)
})

investSelect?.addEventListener('focus', () => {
    ressetIndicators(errorsInputs.investSelect)
})

detailsTxtArea?.addEventListener('focus', () => {
    ressetIndicators(errorsInputs.detailsTextArea)
})

email?.addEventListener('focus', () => {
    ressetIndicators(errorsInputs.emailInput)
})

fullname?.addEventListener('focus', () => {
    ressetIndicators(errorsInputs.fullnameInput)
})

age?.addEventListener('focus', () => {
    ressetIndicators(errorsInputs.ageInput)
})
