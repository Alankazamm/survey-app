import { toggleThemeIcon } from "./themeHandler";

export const iconChanger = ((theme: string) => {
    const surveyIcon = document.querySelector('.surveys-icon')?.querySelector('img');
    const themeIcon = toggleThemeIcon?.querySelector('img');
    if (theme === 'light') {
        surveyIcon!.src = './images/survey-light.svg'
        surveyIcon!.alt = 'light view survey icon'
        themeIcon!.src = './images/sun.svg'
        themeIcon!.alt = 'light theme sun icon'
    }
    else {
        surveyIcon!.src = './images/survey-dark.svg'
        surveyIcon!.alt = 'dark view survey icon'
        
        themeIcon!.src = './images/moon.svg'
        themeIcon!.alt = 'dark theme moon icon'
    }
})