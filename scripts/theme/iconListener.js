import { toggleThemeClass, toggleThemeIcon } from './themeHandler';
import { toggleTheme } from './toggleTheme';
const classChangeListener = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const image = toggleThemeIcon?.querySelector('img');
            if (toggleThemeIcon.classList.contains('light')) {
                image.src = './images/sun.svg';
                image.alt = 'light theme sun icon';
                toggleTheme('light');
            }
            else {
                image.src = './images/moon.svg';
                image.alt = 'dark theme moon icon';
                toggleTheme('dark');
            }
        }
    }
});
const config = { attributes: true, attributeFilter: ["class"] };
classChangeListener.observe(toggleThemeIcon, config);
toggleThemeIcon?.addEventListener("click", () => {
    toggleThemeClass();
});
