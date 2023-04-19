import { resetInputs } from "../input-listeners/resetInputs.js";
import { validateHandler } from "../validators/validators.js";
import navigate from "./navigation.js";
const backButtons = document.querySelectorAll('.back-button');
const skipButtons = document.querySelectorAll('.skip-button');
console.log(skipButtons.length);
const nextButtons = [
    document.querySelector('#next-status'),
    document.querySelector('#next-invest'),
    document.querySelector('#next-details'),
    document.querySelector('#next-contact'),
];
nextButtons.forEach((button) => button.addEventListener('click', () => validateHandler(button.id)));
const pages = ['welcome', 'start', 'status', 'invest', 'details', 'contact', 'sucess', 'dashboard'];
backButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        navigate(pages[index]);
    });
});
skipButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(index);
        if (index === 5) {
            navigate('dashboard');
            resetInputs();
        }
        else {
            index + 1 < pages.length - 1 && index !== 5 ?
                navigate(pages[index + 1]) :
                navigate('welcome');
        }
    });
});
