let str1 = 'dog and cat & DOG AND CAT';
let str2 = `Quick brown fox 
jumps over the lazy dog. bait`
console.log(
    str1.match(
            /d cat/gi
        )
);
let str3 = str2.replace(/\n/, '');
// console.log(str3.match(/b[a-z]*/g));
console.log(str3.match(/\bb/g));