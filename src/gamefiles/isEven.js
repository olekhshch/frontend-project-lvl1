import readline from 'readline-sync';
import randomizer from '../randomizer.js';
import greet from '../cli.js';

greet();

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
  } else if (answer === wrongAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${supposedAnswer}"`);
  } else {
    console.log('wtf dude');
  }
};

isEven();
