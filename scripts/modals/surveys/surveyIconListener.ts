import { getSurveys } from "../../../firebaseFunctions/app";
import { hideModal } from "../error-modal/modalEvents";
import { overlay, surveyModal, surveyModalEmail, surveyModalText, surveySubmit } from "../modal";

const surveyIcon = document.querySelector('.surveys-icon');

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
        surveyModal!.innerHTML = `
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
                    </div>
                    `;
        }).join('')}
        </div>`
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
