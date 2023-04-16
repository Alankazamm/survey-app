import { surveyModal } from "../modal";


const resetModalIcon = document.getElementById('reset-modal-icon');

resetModalIcon?.addEventListener('click', () => {
    console.log('clicked');
    // set animation style atribute to image when clicked
    // resetModalIcon?.querySelector('img')?.setAttribute('style', 'animation: spin 1s ease-in-out ;');
    surveyModal!.innerHTML = `
            <h2>See surveys</h2>
            <p id="survey-modal-text">
                Do you want to see the surveys you have already filled out?
                Enter your email to see the previous surveys you have filled out.
            </p>
            <form id="see-surveys-form">
                <input type="email" name="email" id="survey-email" placeholder="Enter your email" />
                <button type="button" id="submit-survey-email">Submit</button>
            </form>
    `;
});