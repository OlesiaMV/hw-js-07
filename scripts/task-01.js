'use strict';

const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

const items = document.querySelectorAll('.item');

items.forEach(item =>
    console.log(
      `Категория: ${item.firstElementChild.textContent}
  Количество элементов: ${item.lastElementChild.children.length}`
    )
  );