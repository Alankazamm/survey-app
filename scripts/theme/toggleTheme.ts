export const toggleTheme = (theme:string) => {
    if (theme === 'light') {
        document.documentElement.style.setProperty('--primary-color', 'rgba(62, 178, 94, 1)');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.documentElement.style.setProperty('--primary-text-color', 'black');
        document.documentElement.style.setProperty('--secondary-text-color', 'white');
        document.documentElement.style.setProperty('--unselected-color', 'rgba(62, 178, 94, 0.3)');
        document.documentElement.style.setProperty('--selected-color', 'rgba(62, 178, 94, 1)');

    } else {
        document.documentElement.style.setProperty('--primary-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'rgba(62, 178, 94, 1)');
        document.documentElement.style.setProperty('--primary-text-color', 'white');
        document.documentElement.style.setProperty('--secondary-text-color', 'black');
        document.documentElement.style.setProperty('--unselected-color', 'white');
        document.documentElement.style.setProperty('--selected-color', 'rgb(48, 109, 65)');

    }
        
}