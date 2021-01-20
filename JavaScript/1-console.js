'use strict';

console.clear();

console.log('log');

const obj = {
  name: 'Marcus Aurelius',
  city: 'Roma',
  born: 121,
  children: [
    {
      name: 'Vibia Aurelia Sabina',
      city: 'Sirmium',
      born: 170,
    },
    {
      name: 'Annia Cornificia Faustina Minor',
      city: 'Roma',
      born: 160,
    }
  ]
};

Object.defineProperty(obj, 'childCount', {
  enumerable: false,
  writable: false,
  value: 13
});

console.log({ obj });

console.dir({ obj });
console.dir({ obj }, { showHidden: true, depth: 20, colors: true });

console.error('Error');

console.time('Loop time');
const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
console.timeEnd('Loop time');

console.trace('Trace here');

console.log('\n' + Object.keys(console).join(', '));
