import readline from 'readline-sync';
import greeting from '../cli.js';
import randomizer from '../randomizer.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  for (i; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  let mistake = false;
  while (i < 3 && mistake === false) {
    const number = randomizer(1, 100);
    const expected = isPrime(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readline.question('Your answer: ');
    if (answer === expected) {
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
