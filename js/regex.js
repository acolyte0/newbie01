let str1 = 'dog and cat & DOG AND CAT';
let str2 = `The quick brown fox 
jumps over the lazy dog. bait`;
// console.log(str1.match(/d cat/gi)); // global, case insensitive
let str3 = str2.replace(/\n/, ''); // replaces new line with nothing.
// console.log(str3.match(/b[a-z]*/g)); // word starting with b
// console.log(str3.match(/\bb/g)); // \b: beginning of a word
let result = str3.match(/[a-z]/i);
// console.log(Array.isArray(result));
// console.log(result);
// console.log(str3.match(/[A-Za-z]/));
// console.log(str3.match(/[A-Z][a-z]*/g));

let str4 = `The "quick" brown Fox jumps over the lazy dog.`;
let result1 = str4.match(/[A-Z][a-z]*/g);
// console.log(result1);
let result2 = str4.replace(/"/g, `'`);
// console.log(result2);
let str5 = `Iraq is iraq`;
let str6 = `The quick brown fox jumps over the lazy dog.`;


/*

console.log(str5.match(/[a-z]*q[^u]/g)); // ^u any character that is not 'u'
console.log(str5.match(/[A-Z][a-z]*q[^u]/g)); // ^u any character that is not 'u'
console.log(str5.match(/[a-z]*q/gi)); // ends with q. case insensitive
console.log(str5.match(/[a-z]*q/g)); // ends with q.
console.log(str4.match(/[a-z]*[^" ]/gi));
*/
// console.log(str4.match(/[a-z]*(i|o)[a-z]*/));
// console.log('last', str6.match(/quick (?:brown )?([a-zA-Z]+)/));

let filterString01 = `The "quick" 'brown' fox jumps over the lazy dog.`
let result3 = filterString01.replace(/"/g, '&quot;').replace(/'/g, '&apos;');

console.log(result3);