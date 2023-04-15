import { closeButton } from "./modal";
import { hideModal } from "./modalEvents";


closeButton?.addEventListener('click', () => {
    hideModal();
})