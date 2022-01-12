import readline from 'readline-sync';
import randomizer from '../randomizer.js';
import greeting from '../cli.js';

const gcd = (num1, num2) => {
  const biggest = Math.min(num1, num2);
  let res = 1;
  for (let i = 2; i <= biggest; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      res = i;
    }
  }
  return res;
};

export default () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  let mistake = false;
  while (i < 3 && mistake === false) {
    const num1 = randomizer(50);
    const num2 = randomizer(30);
    const expected = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readline.question('Your answer: ');
    if (Number(answer) === expected) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      console.log(`Let's try again, ${userName}!`);
      mistake = true;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
