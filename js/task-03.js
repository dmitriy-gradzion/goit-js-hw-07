// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список `ul#gallery`.

// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.


const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

gallery.style.display = 'flex';
gallery.style.alignItems = 'center';
gallery.style.listStyle = 'none';
gallery.style.justifyContent = 'space-around';

const pics = images.map(el => {
  const tag = document.createElement('li');
  tag.insertAdjacentHTML('afterbegin', `<img src='${el.url}' alt='${el.alt}' width = '300px'></img>`);  
  return tag;
});

gallery.append(...pics);