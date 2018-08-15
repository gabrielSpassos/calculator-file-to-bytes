const fs = require('fs');

const test = fs.readFileSync('test.txt', 'utf8');
console.log(test);

console.log('Bytes number = ' + byteLength(test));

function byteLength(str) {
    let s = str.length;
    for (let i=str.length-1; i>=0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s+=2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }
    return s;
}