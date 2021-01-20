'use strict';

const write = (s) => process.stdout.write(s);

let login = '';
let password = '';

process.stdin.on('data', (chunk) => {
  if (!login) {
    login = chunk.toString().trim();
    write('\x1b[13;34H');
  } else {
    password = chunk.toString().trim();
    write(`\nHello, ${login}!\n Your password is: ${password}`);
  }
});

write('\x1Bc');
write('\x1b[10;10H');

setTimeout(() => {
  write('\n\n');
  process.exit(0);
}, 10000);

write(`
                      ┌───────────────────────────────┐
                      │ Login:                        │
                      │ Password:                     │
                      └───────────────────────────────┘
`);

write('\x1b[3A\x1b[31C');
