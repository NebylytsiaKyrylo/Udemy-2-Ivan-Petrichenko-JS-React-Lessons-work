const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length) //watch class length
// console.log(btns[0].classList.item(0)) //watch class
// console.log(btns[0].classList.item(1))
// console.log(btns[0].classList.add('red', 'white', '2')) //add class
// console.log(btns[0].classList.remove('blue')); //delete class
// console.log(btns[0].classList.toggle('blue')); //delete class

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

//add and delete class button onclick
btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  //or

  btns[1].classList.toggle('red');
});

//event delegation from parents to child
// wrapper.addEventListener('click', event => {
//   if (event.target && event.target.tagName == 'BUTTON') {
//     console.log('hello');
//   }
// });

//event delegation from parents to child only button with class red
wrapper.addEventListener('click', event => {
  if (event.target && event.target.matches('button.red')) {
    console.log('hello');
  }
});

//or without delegation


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
