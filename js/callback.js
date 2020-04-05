function f1(t) {
    console.log(t);
}

function f2(f) {
    let str = 'string1';
    f(str);
}

f2(f1);