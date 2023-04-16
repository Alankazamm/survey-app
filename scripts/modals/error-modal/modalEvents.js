import { errorModal, errorModalText, overlay } from "../modal";
export const fillModal = (text) => {
    errorModalText.innerText = text;
};
export const showErrorModal = () => {
    overlay.style.display = 'block';
    errorModal.style.display = 'flex';
};
export const hideModal = () => {
    overlay.style.display = 'none';
    errorModal.style.display = 'none';
};
export const mountModal = (text) => {
    fillModal(text);
    showErrorModal();
};
overlay?.addEventListener('click', () => {
    if (overlay.style.display === 'block' && errorModal.style.display === 'flex') {
        hideModal();
    }
});
