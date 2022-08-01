const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
  showAgeAndLangs(obj) {
    let phrase = `I’m ${obj.age} and I own: `;
    let lang = obj.skills.languages.forEach(
      (el) => (phrase += `${el.toUpperCase()} `),
    );
    return phrase;
  },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
  let { exp } = plan.skills;
  return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
  let str = '';
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Language ${key} been studied in ${programmingLangs[key]}\n`;
  }

  return str;
}
console.log(showProgrammingLangs(personalPlanPeter));
