let a1 = [1014,216,8418,35620,22,3225,929,1033,51];
let a2 = [1,2,3,4,5,6,7,8,9,10];
let a3 = [2,1,4,3,6,5,8,7,10,9];
a2.reverse();
// a1.sort((a,b)=>{console.log(a,b); return a - b});
// a2.sort((a,b)=>{console.log(a,b); return a - b});
a3.sort((a,b)=>{console.log(a,b); return a - b});
console.log(a3);
// console.log(Array.prototype.slice.call(a1));
function list1 () {
    return Array.prototype.slice.call(arguments);
}


let list1b = list1.bind(null, 37);
console.log(list1b(3,6,8));