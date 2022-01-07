import readline from'readline-sync';

export const greeting = () => {
    let userName = readline.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}