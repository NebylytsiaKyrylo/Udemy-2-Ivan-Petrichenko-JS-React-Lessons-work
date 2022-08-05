'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

hearts.forEach((a) => (a.style.backgroundColor = 'green'));

btns[0].style.borderRadius = '30%';
btns[2].style.backgroundColor = 'red';

//create element to index
const div = document.createElement('div');

div.classList.add('black');

document.body.append(div); //to end file

// wrapper.append(div); //to end class
wrapper.prepend(div); //to start class

