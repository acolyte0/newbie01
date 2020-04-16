function f1(t) {
    console.log(t);
}

function f2(f) {
    let str = 'THE STRING';
    f(str);
    console.log('function 2 is done');
}

f2(f1);
console.log('end of line');