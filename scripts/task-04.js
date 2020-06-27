'use strict';

let counterValue = 0;

const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const counter = document.getElementById('value');

const incrementPlus = () => {
  counter.textContent = counterValue;
  counterValue += 1;
};

const incrementMinus = () => {
  counter.textContent = counterValue;
  counterValue -= 1;
};

increment.addEventListener('click', incrementPlus);
decrement.addEventListener('click', incrementMinus);