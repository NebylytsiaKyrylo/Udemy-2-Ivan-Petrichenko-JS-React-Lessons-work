'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.querySelectorAll('.heart'),
  oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

hearts.forEach((a) => (a.style.backgroundColor = 'green'));

btns[0].style.borderRadius = '30%';
btns[2].style.backgroundColor = 'red';

//create element to index
const div = document.createElement('div');

div.classList.add('black');

// document.body.append(div); //to end body

wrapper.append(div); //to end class
// wrapper.prepend(div); //to start class

// circles[0].before(div); //before class circles
// circles[1].after(div); //after heart i=1;

// hearts[0].remove(); //delete element

// btns[2].replaceWith(hearts[1]); //replace elements, btns[2] deleted from page and hearts[1] removed

div.innerHTML = '<h1>Hello world</h1>'; // add html structure to div
// div.textContent = 'Hello world'; //add text to div

div.insertAdjacentElement("afterend", '<h2>Hello</h2>'); //insert element
