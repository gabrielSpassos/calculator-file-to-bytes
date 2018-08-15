const fs = require('fs');

const test = fs.readFileSync('test.txt', 'utf8');
console.log(test);

const testValue = encodeURI(test).split(/%..|./).length - 1;
console.log(testValue);