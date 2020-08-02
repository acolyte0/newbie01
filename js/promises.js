/*
const f1 = (v) => new Promise((resolve, reject)=> {
    if(v) {
        v += '- function 1 -';
        resolve(v);
    } else {
        reject('value of f1 invalid');
    }
})
*/

function f1(v) {
    return new Promise(
        (resolve, reject) => {
            if(v) {
                v += '- function 1 -';
                resolve(v);
            } else {
                reject('value of f1 invalid');
            }
        }
    )
}

/*
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
*/

function f2(v) {
    return new Promise(
        (resolve, reject) => {
            if(v) {
                v += '- function 2 -';
                resolve(v);
            } else {
                reject('value of f2 invalid');
            }
        }
    );
}

/*
const f3 = (v) => new Promise(
    (resolve, reject) => {
        if(v) {
            v += '- function 3 -';
            resolve(v);
        } else {
            reject('value of v3 invalid');
        }
    }
);
*/

function f3(v) {
    return new Promise(
        (resolve, reject) => {
            if(v) {
                v += '- function 3 -';
                resolve(v);
            } else {
                reject('value of f3 invalid');
            }
        }
    );
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
    whatever1=>{return f3(whatever1)}
).then(
    whatever2=>console.log(whatever2)
).catch(err=>console.log(err));