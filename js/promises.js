function f1(v, s, f) {
    if(v) {
        v += '- function 1 -';
        s(v);
    } else {
        f('value invalid');
    }
}

f1('', (v1)=>{console.log(v1)}, (err)=>console.log(err));