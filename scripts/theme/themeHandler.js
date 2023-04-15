export const toggleThemeIcon = document.querySelector('.toggle-theme');
export const toggleThemeClass = () => {
    toggleThemeIcon?.className.includes('light') ?
        toggleThemeIcon.classList.replace("light", "dark") :
        toggleThemeIcon?.classList.replace("dark", "light");
};
