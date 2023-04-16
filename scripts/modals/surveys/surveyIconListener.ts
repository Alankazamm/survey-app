import { getSurveys } from "../../../firebaseFunctions/app";
import { iconChanger } from "../../theme/iconChanger";
import { toggleThemeIcon } from "../../theme/themeHandler";
import { hideModal } from "../error-modal/modalEvents";
import { overlay, surveyModal, surveyModalEmail, surveyModalText, surveySubmit } from "../modal";

const surveyIcon = document.querySelector('.surveys-icon');
const resultDiv = document.getElementById('result');
const submissionDiv = document.getElementById('submission');
interface Survey {
    email: string;
    name: string;
    age: string;
    details: string;
    invest: string;
    market: string;
    resources: string[];
    status: string;
}

export const showModal = () => {
    if (overlay!.style.display === 'block' && surveyModal!.style.display === 'flex') {
        overlay!.style.display = 'none';
        surveyModal!.style.display = 'none';
        return;
    }
    overlay!.style.display = 'block';
    surveyModal!.style.display = 'flex';
}

const showSurveys = (surveys: any[]) => {
    if (surveys.length === 0) {
        surveyModalText!.innerText = 'No surveys found, please try with a different email';
        return;
    }
    else {
        submissionDiv!.style.display = 'none';
        resultDiv!.innerHTML = `
        <span id="reset-modal-icon">
            <img src="./images/spinner-dark.svg" alt="close icon" />
        </span>
        <div class="modal-content">
            <div class="modal-header">
                <h2>Surveys</h2>
                ${surveys.map(survey => {
            return `
                    <div class="survey">
                        <h3>${survey.name}</h3>
                        <p>Email: ${survey.email}</p>
                        <p>Age: ${survey.age}</p>
                        <p>Investment strategy: ${survey.invest}</p>
                        <p>Operating market: ${survey.market}</p>
                        <div><p>Training resources:</p> ${survey.resources.map((resource: string) => {
                return `
                            <p>${resource}</p>`
            }).join('')}</div>
                        <p>Account status: ${survey.status}</p>
                        <p>Report on losses: ${survey.details}</p>
                        <p>Survey date: ${survey.date}</p>
                    </div>
                    `;
        }).join('')}
        </div>`
        resultDiv!.style.display = 'block';
        const resetModalIcon = document.getElementById('reset-modal-icon');
        resetModalIcon!.style.display = 'block';
        if (toggleThemeIcon!.classList.contains('light')) {
            iconChanger('light');
        }
        else {
            iconChanger('dark');
        }
        resetModalIcon?.addEventListener('click', () => {
            console.log('clicked');
            // set animation style atribute to image when clicked
            resetModalIcon?.querySelector('img')?.setAttribute('style', 'animation: spin 1s infinite linear ;');
            //timeout to reset animation
            setTimeout(() => {
                resetModalIcon?.querySelector('img')?.setAttribute('style', 'animation: none');
                submissionDiv!.style.display = 'flex';
                resultDiv!.style.display = 'none';
            }, 1000);
        });
    }
}


surveyIcon?.addEventListener('click', () => {
    showModal();
});


surveySubmit!.addEventListener('click', () => {
    const email = surveyModalEmail.value;
    getSurveys(email).then((surveys: Survey[]) => {
        showSurveys(surveys);
    })
})

overlay?.addEventListener('click', () => {
    if (overlay!.style.display === 'block' && surveyModal!.style.display === 'flex') {
        showModal();

    }
});
