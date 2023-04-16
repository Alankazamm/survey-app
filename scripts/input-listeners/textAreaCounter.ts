

export const countDisplayer = document.getElementById('count-displayer')

export const textAreaCounter = (textArea: HTMLTextAreaElement) => {
    const textAreaValue = textArea.value;
    const textAreaValueLength = textAreaValue.length;
    countDisplayer!.textContent = `${textAreaValueLength}/130`
    if (textAreaValueLength > 100) {
        countDisplayer!.style.color = 'red';
    } else {
        countDisplayer!.style.color = 'black';
    }
}

const detailsTxtArea = document.getElementById('details-textarea') as HTMLTextAreaElement;
detailsTxtArea.addEventListener('input', () => textAreaCounter(detailsTxtArea))
