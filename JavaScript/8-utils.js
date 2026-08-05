'use strict';

// Utilities

const write = (s) => process.stdout.write(s);
const read = (callback) => process.stdin.on('data', (chunk) => {
  callback(chunk.toString().trim());
});
const clear = () => write('\x1Bc');
const pos = (row, col) => write(`\x1b[${row};${col}H`);
const box = (row, col, height, width) => {
  const h = height - 2;
  const w = width - 2;
  const border = '┌┐─│└┘'.split('');
  const top = `${border[0]}${border[2].repeat(w)}${border[1]}`;
  const mid = `${border[3]}${' '.repeat(w)}${border[3]}`;
  const bottom = `${border[4]}${border[2].repeat(w)}${border[5]}`;
  pos(row, col);
  write(top);
  for (let i = 1; i < h; i++) {
    pos(row + i, col);
    write(mid);
  }
  pos(row + h, col);
  write(bottom);
};

// Usage

read((s) => {
  write(`\nHello, ${s}!\n`);
  process.exit(0);
});
clear();

setTimeout(() => {
  write('\n\n');
  process.exit(0);
}, 10000);

box(10, 10, 4, 30);
pos(11, 12);
write('Login: ');
