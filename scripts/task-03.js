'use strict';

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

  const list = document.querySelector('#gallery');
  
  function createGalery() {
    const arr = [];
    const createList = document.createElement('li');
    const createImages = document.createElement('img');

    images.forEach(image => {
        createImages.setAttribute('src', image.url);
        createImages.setAttribute('alt', image.alt);
  
      createList.appendChild(createImages);
      arr.push(createList.outerHTML);
    });
    return arr.join('');
   
  }
  
  list.insertAdjacentHTML('afterbegin', createGalery());