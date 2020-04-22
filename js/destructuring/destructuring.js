let str = 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen ninteen twenty twenty-one twenty-two';

let a1 = str.split(' ');
/*
let [a, b, ...a2] = a1;

console.log(a2);
console.log(a, b);
*/

let o1 = {
    p1: 'string1',
    p2: 'string2',
    p3: 'string3'
}

let {p1: target} = o1;

console.log(target);