const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', updateFontSize);

function updateFontSize() {
    const updatingFontSize = fontSizeControl.value + 'px';
    text.style.fontSize = updatingFontSize;
};

updateFontSize();