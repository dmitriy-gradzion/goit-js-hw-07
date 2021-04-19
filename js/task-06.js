// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.


const inputText = document.querySelector('#validation-input');
const dataLength = Number(inputText.getAttribute('data-length'));

function lineLength() {  
    const textLength = inputText.value.length;
    
 if (textLength === dataLength) {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');   
 } 
 
 if (textLength > dataLength || textLength < dataLength) {
    inputText.classList.add('invalid');
    inputText.classList.remove('valid');
  }

  if (textLength === 0) {
    inputText.classList.remove('valid');
    inputText.classList.remove('invalid');
  }
}

inputText.addEventListener('blur', lineLength);
