import { hideModal } from "./error-modal/modalEvents";
import { showModal } from './surveys/surveyIconListener';

export const overlay = document.getElementById('overlay');
export const errorModal = document.getElementById('invalid-form-modal');
export const closeButton = document.getElementById('close-modal');
export const errorModalHeader = errorModal?.querySelector('h2');
export const errorModalText = errorModal?.querySelector('p');
export const surveyModal = document.getElementById('see-surveys-modal');
export const surveyModalText = document.getElementById('survey-modal-text');
export const surveyModalEmail = document.getElementById('survey-email') as HTMLInputElement;
export const surveySubmit = document.getElementById('submit-survey-email');


