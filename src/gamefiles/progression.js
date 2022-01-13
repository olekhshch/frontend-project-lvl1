import readline from 'readline-sync';
import greeting from '../cli.js';
import randomizer from '../randomizer.js';

const generateProgression = (start, range, n) => { // n - number of elements
  const res = [];
  for (let i = 0; i < n; i += 1) {
    res[i] = start + i * range;
  }
  return res;
};

const game = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  let i = 0;
  let mistake = false;
  while (i < 3 && mistake === false) {
    const startPoint = randomizer(0, 10);
    const range = randomizer(1, 10);
    const length = randomizer(5, 10);
    const progr = generateProgression(startPoint, range, length);
    const missingIndex = randomizer(0, length - 1);
    const expected = progr[missingIndex];
    let question = '';
    for (let n = 0; n < length; n += 1) {
      if (progr[n] === expected) {
        question += '.. ';
      } else {
        question += `${progr[n]} `;
      }
    }
    console.log(`Question: ${question}`);
    const answer = readline.question('Your answer: ');
    if (Number(answer) === expected) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${expected}'.`);
      console.log(`Let's try again, ${userName}!`);
      mistake = true;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
