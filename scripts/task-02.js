'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  const list = document.querySelector('#ingredients');

function createList() {
  return ingredients.map(ingredient => {
    const elemIngredient = document.createElement('li');
    elemIngredient.textContent = ingredient;
    return elemIngredient;
  });
}

list.append(...createList());
  

