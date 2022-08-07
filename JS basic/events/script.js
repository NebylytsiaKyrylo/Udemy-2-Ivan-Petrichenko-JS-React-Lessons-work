// const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');

// btn.onclick = () => alert('Click');

// btn.addEventListener('click', () => alert('Click')); //click on element

// btn.addEventListener('mouseenter', (event) => console.log(event.target));

// btn.addEventListener('mouseenter', (event) => {
//   console.log(event.target);
//   event.target.remove();
// }); //delete element event mouseenter

// btn.addEventListener('click', (e) => e.target.remove()); // delete element on click

// create fn and delete element or other events
const delElement = (e) => e.target.remove();
// btn.addEventListener('click', delElement);

//add events to all buttons
// btns.forEach(btn => btn.addEventListener('click', delElement));
//add the option that only 1 time
btns.forEach(btn => btn.addEventListener('click', delElement, {once: true}));

//Create an event by condition and delete an event by condition
// let i = 0;
// const mouseEnterEl = (e) => {
//   console.log(e.target);
//   i += 1;
//   console.log(i);
//   if (i === 3) {
//     btn.removeEventListener('mouseenter', mouseEnterEl);
//   }
// };
// btn.addEventListener('mouseenter', mouseEnterEl);


//change standard browser behavior
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('preventDefault changed');
});
