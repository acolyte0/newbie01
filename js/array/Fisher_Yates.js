let a1 = ['one', 'two', 'three', 'four', 'five'];

for(let i = a1.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = a1[i];
    a1[i] = a1[j];
    a1[j] = k;
}

console.log(a1);