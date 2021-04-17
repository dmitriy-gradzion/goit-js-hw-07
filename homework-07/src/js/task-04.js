// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const buttonInc = document.querySelector('[data-action="increment"]');
const buttonDec = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');

buttonInc.addEventListener('click', increment);
buttonDec.addEventListener('click', decrement);

function increment() {
    counterValue += 1;
    counter.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    counter.textContent = counterValue;
}