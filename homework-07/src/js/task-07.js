// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.



const controlSize = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');

function resize() {
    sizeText.style.fontSize = controlSize.value + 'px';
}

controlSize.addEventListener('input', resize);