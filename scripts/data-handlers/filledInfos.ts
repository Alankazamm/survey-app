import { storeSurvey } from '../firebaseFunctions/app';
import { treatedFormToUpload } from "./treatedFormToUpload";

export interface Infos {
    name: string;
    email: string;
    age: string;
    status: string;
    market?: string;
    invest?: string;
    resources?: string[];
    details?: string;
    date?: string;

}
// dom manipulation:
// const infosUl = document.createElement('ul');
// const infoItem = document.createElement('li');
const itemDivs:NodeListOf<HTMLElement> = document.querySelectorAll('.infoItem');


export const createForm = (infos: Infos) => {
    let filledForm: Array<string | string[]> = [];
    filledForm.push(infos.name);
    filledForm.push(infos.email);
    filledForm.push(infos.age);
    console.log(infos);
    switch (infos.status) {
        case '2':
            filledForm.push('My account status is okay.');
            break;
        case '3':
            filledForm.push("I'm currently having financial issues.");
            break;
        case '4':
            filledForm.push("I have not created an account yet.");
            break;
        case '1':
            filledForm.push("Not answered.");
            break;
    }

    switch (infos.market) {
        case 'stk':
            filledForm.push('stock market');
            break;
        case 'fx':
            filledForm.push('foreign exchange');
            break;
        case 'cmd':
            filledForm.push('commodity');
            break;
        case 'bond':
            filledForm.push('bond market');
            break;
        case 'cripto':
            filledForm.push('cryptocurrency market');
            break;
        default:
            filledForm.push("Not answered.");
            break;
    }
    switch (infos.invest) {
        case '2':
            filledForm.push("My bank's manager advices me.");
            break;
        case '3':
            filledForm.push("I flip a coin");
            break;
        
        default:
            filledForm.push("I have not invested yet.");
            break;
    }
    let arrCheckeds: string[] = [];
    infos.resources?.forEach(resource => {
        switch (resource) {
            case 'books':
                arrCheckeds.push('Books and articles');
                break;
            case 'ytb':
                arrCheckeds.push('YouTube tutorial videos');
                break;
            case 'courses':
                arrCheckeds.push('online or face to face courses');
                break;
            case 'exp':
                arrCheckeds.push('experience with little investment');
                break;
            default:
                arrCheckeds.push('Not answered');
                break;
            
        }
    });

    arrCheckeds.length > 0? filledForm.push(arrCheckeds):filledForm.push(['Not answered'])
    infos.details!.length > 0 ? filledForm.push(infos.details!) : filledForm.push('Not filled');
    //create the date of the survey in string with these format: dd/mm/yyyy hh:mm:ss
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    const filledWithDate = filledForm.concat(dateString);
    console.log(filledWithDate);
    storeSurvey(treatedFormToUpload(filledWithDate));
    const domizedValues: string[] = filledForm.map((item):string => {
        if (!Array.isArray(item)) return `<p>${item}</p>`
        else
            return  `<div>${item.map(nestedItem => {
                return `<br> ${nestedItem}`;
            })}</div>`;
    });
    
    itemDivs.forEach((div, index) => {
        domizedValues.forEach((value, i) => {
            if (i === index) {
                div.innerHTML = value;
            }
        })
    });
    
}