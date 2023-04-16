import { iconChanger } from './iconChanger';
import { toggleThemeClass, toggleThemeIcon } from './themeHandler'
import { toggleTheme } from './toggleTheme';

const classChangeListener = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
           
            if (toggleThemeIcon!.classList.contains('light')) {
                iconChanger('light')
                toggleTheme('light')
            }
            else {
                iconChanger('dark')
                toggleTheme('dark')
            }
        }
    }
})
const config = { attributes: true, attributeFilter: ["class"]};

classChangeListener.observe(toggleThemeIcon!, config);

toggleThemeIcon?.addEventListener("click", () => {
    toggleThemeClass()
});