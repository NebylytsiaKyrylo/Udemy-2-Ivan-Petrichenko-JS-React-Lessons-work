let students = {
  js: [
    {
      name: 'John',
      progress: 100,
    },
    {
      name: 'Ivan',
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: 'Peter',
        progress: 20,
      },
      {
        name: 'Ann',
        progress: 18,
      },
    ],
    pro: [
      {
        name: 'Sam',
        progress: 10,
      },
    ],
  },
};

//this example without recursion and will only fit under clear conditions
function progressStudents(data) {
  let students = 0;
  let progress = 0;

  for (const course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (const student of course) {
        progress += student.progress;
      }
    } else {
      for (const subCourse of Object.values(course)) {
        students += subCourse.length;

        for (const student of subCourse) {
          progress += student.progress;
        }
      }
    }
  }

  return progress / students;
}

console.log(progressStudents(students));

//write the function with recursion and simplify it
function progressStudentsRecursion(data) {
  if (Array.isArray(data)) {
    let progress = 0;

    for (const student of data) {
      progress += student.progress;
    }

    return [progress, data.length];
  } else {
    let total = [0, 0];

    for (const subData of Object.values(data)) {
      const subCourse = progressStudentsRecursion(subData);
      total[0] += subCourse[0];
      total[1] += subCourse[1];
    }

    return total;
  }
}

const result = progressStudentsRecursion(students);
console.log(result[0] / result[1]);
