'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.prompt();

const commands = {
  help() {
    console.log('Commands:', Object.keys(commands).join(', '));
  },
  hello() {
    console.log('Hello there!');
  },
  exit() {
    rl.close();
  }
};

rl.on('line', line => {
  line = line.trim();
  const command = commands[line];
  if (command) command();
  else console.log('Unknown command');
  rl.prompt();
}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});
