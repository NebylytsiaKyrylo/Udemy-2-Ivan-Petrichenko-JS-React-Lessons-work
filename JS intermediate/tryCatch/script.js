'use strict';

const data = [
  {
    id: 'box',
    tag: 'div',
  },
  {
    id: '',
    tag: 'nav',
  },
  {
    id: 'circle',
    tag: 'span',
  },
];

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id) throw new Error(`Il n'y a pas d'id pour index: ${i}`);

    block.setAttribute('id', blockObj.id);
    document.body.append(block);
  });
} catch (error) {
  console.error(error);
}

console.log('test');
