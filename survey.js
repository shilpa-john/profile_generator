const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answersArray = [];

r1.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answersArray.push(answer);


r1.question('What courses do you like?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answersArray.push(answer);


r1.question('What activity do you like? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answersArray.push(answer);


console.log(
  `${answersArray[0]} enjoys working on it ${answersArray[1]} Java and HTML ${answersArray[2]} Playing football and tennis`);

});
});
});