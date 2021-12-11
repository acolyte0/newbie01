let a1 = ['apple','lemon', 'mango', 'orange', 'pineapple'];
let o1 = {title: 'heading 1', path: 'www.none.com', content:'paragraph 1', arr1: []}

// Object.assign(o1.array1, a1); // 1st argument must exist

Object.assign(o1.arr1, a1);
console.log(o1);