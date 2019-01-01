'use strict';

const write = s => process.stdout.write(s);

process.stdin.on('data', chunk => {
  write(`\nHello, ${chunk.toString().trim()}!`);
});

write('\x1Bc');
write('\x1b[10;10H');

setTimeout(() => {
  write('\n\n');
  process.exit(0);
}, 10000);

write(`
                      ┌────────────────────────────┐
                      │ Login:                     │
                      └────────────────────────────┘
`);

write('\x1b[2A\x1b[31C');
