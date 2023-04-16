import { toggleThemeIcon } from "./themeHandler";
export const surveyIcon = document.querySelector('.surveys-icon')?.querySelector('img');
export const themeIcon = toggleThemeIcon?.querySelector('img');
export const iconChanger = ((theme) => {
    const resetModalIcon = document.querySelector('#reset-modal-icon')?.querySelector('img');
    if (theme === 'light') {
        surveyIcon.src = './images/survey-light.svg';
        surveyIcon.alt = 'light view survey icon';
        themeIcon.src = './images/sun.svg';
        themeIcon.alt = 'light theme sun icon';
        resetModalIcon.alt = 'light reset spinner icon';
        resetModalIcon.src = './images/spinner-dark.svg';
    }
    else {
        surveyIcon.src = './images/survey-dark.svg';
        surveyIcon.alt = 'dark view survey icon';
        themeIcon.src = './images/moon.svg';
        themeIcon.alt = 'dark theme moon icon';
        resetModalIcon.src = './images/spinner-light.svg';
        resetModalIcon.alt = 'dark reset icon';
    }
});
