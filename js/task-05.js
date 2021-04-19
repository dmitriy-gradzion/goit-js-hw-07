// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
//     input), подставляет его текущее значение в `span#name-output`. Если инпут
//     пустой, в спане должна отображаться строка `'незнакомец'`.


const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', newName);

function newName() {    
  if (inputName.value === '') {
    outputName.textContent = 'незнакомец';
  }
  outputName.textContent = inputName.value;
};
