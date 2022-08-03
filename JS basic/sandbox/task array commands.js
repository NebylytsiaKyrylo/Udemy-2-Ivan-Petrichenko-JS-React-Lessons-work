const students = [
  'Peter',
  'Andrew',
  'Ann',
  'Mark',
  'Josh',
  'Sandra',
  'Cris',
  'Bernard',
  'Takesi',
  'Kirill',
  'Max',
  'Elena',
];

function sortStudentsByGroups(arr) {
  let result = [];
  let rest = [];

  for (let i = 0; i < arr.length; i += 4) {
    if (result.length === 3) {
      rest = arr.sort().slice(i);
    } else {
      result.push(arr.sort().slice(i, i + 4));
    }
  }

  return result.concat(`Оставшиеся студенты: ${rest.length > 0 ? rest.join(', ') : '-'}`);
}

console.log(sortStudentsByGroups(students));
