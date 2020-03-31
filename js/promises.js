function f1(v, s, f) {
    if(v) {
        v += '- function 1 -';
        s(v);
    } else {
        f('value of f1 invalid');
    }
}

function f2(v, s, f) {
    if(v) {
        v += '- function 2 -';
        s(v);
    } else {
        f('value of v2 invalid');
    }
}

function f3(v, s, f) {
    if(v) {
        v += '- function 3 -';
        s(v);
    } else {
        f('value of v3 invalid');
    }
}

f1(
    'string',
    (whatever)=>{
        f2(whatever,
            (whatever1)=>{
                console.log(whatever1)
            },
        (anyValue)=>console.log(anyValue))
    },
    (anything)=>console.log(anything)
);
