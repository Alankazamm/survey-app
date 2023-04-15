import { modal,modalText, overlay } from "./modal"

export const fillModal = (text:string) => {
    modalText!.innerText = text;
}

export const showModal = () => {
    overlay!.style.display = 'block';
    modal!.style.display = 'flex';
}

export const hideModal = () => {
    overlay!.style.display = 'none';
    modal!.style.display = 'none';
}

export const mountModal = (text: string) => {
    fillModal(text);
    showModal();
}

