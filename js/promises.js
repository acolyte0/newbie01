const f1 = (v) => new Promise((resolve, reject)=> {
    if(v) {
        v += '- function 1 -';
        resolve(v);
    } else {
        reject('value of f1 invalid');
    }
})

const f2 = (v) => new Promise(
    (resolve, reject) => {
        if(v) {
            v += '- function 2 -';
            resolve(v);
        } else {
            reject('value of v2 invalid');
        }
    }
);

function f3(v, s, f) {
    if(v) {
        v += '- function 3 -';
        s(v);
    } else {
        f('value of v3 invalid');
    }
}
/*
f1(
    'string',
    (whatever)=>{
        f2(whatever,
            (whatever1)=>{
                f3(
                    whatever1,
                    (anything1)=>{
                        console.log(anything1);
                    },
                    (err)=>console.log(err)
                );
            },
        (anyValue)=>console.log(anyValue))
    },
    (anything)=>console.log(anything)
);
*/
f1('str').then(
    (whatever)=>{return f2(whatever)}
).then(
    whatever1=>console.log(whatever1)
).catch(err=>console.log(err));