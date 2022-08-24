'use strict';

// Node.js v17

const readline = require('readline').promises;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = async () => {
  const name = await rl.question('Enter your name: ');
  console.log(`Hello, ${name}!`);
  rl.close();
};

main();
