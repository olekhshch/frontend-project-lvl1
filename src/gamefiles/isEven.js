import readline from 'readline-sync';
import randomizer from '../randomizer.js';

const isEven = () => {
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let iteration = 0;
  let mistake = false;
  while (iteration < 3 && mistake === false) {
    const number = randomizer(10);
    let supposedAnswer = 'yes';
    let wrongAnswer = 'no';
    if (number % 2 !== 0) {
      supposedAnswer = 'no';
      wrongAnswer = 'yes';
    }
    console.log(`Question: ${number}`);
    const answer = readline.question('Your answer: ');
    if (answer === supposedAnswer) {
      console.log('Correct!');
      iteration += 1;
    } else if (answer === wrongAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${supposedAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      mistake = true;
    } else {
      console.log('wtf dude');
      mistake = true;
    }
  }
  if (iteration === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default isEven;
