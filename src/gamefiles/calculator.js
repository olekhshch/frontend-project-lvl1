import readline from 'readline-sync';
import randomizer from '../randomizer.js';
import greeting from '../cli.js';

const mathematics = (a, b, operator) => {
  let res = 0;
  switch (operator) {
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    default :
      res = a + b;
  }
  return res;
};

const calc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  let iteration = 0;
  let mistake = false;
  const operations = ['+', '-', '*'];
  while (iteration < 3 && mistake === false) {
    const operation = operations[randomizer(0, 2)];
    const num1 = randomizer(0, 50);
    let num2 = randomizer(0, 50);
    if (operation === '*') {
      num2 = randomizer(0, 10);
    }
    const expected = mathematics(num1, num2, operation);
    console.log(`Question: ${num1} ${operation} ${num2}`);
    const answer = readline.question('Your answer: ');
    if (Number(answer) === expected) {
      console.log('Correct!');
      iteration += 1;
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${expected}.`);
      console.log(`Let's try again, ${userName}!`);
      mistake = true;
    }
  }
  if (iteration === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default calc;
