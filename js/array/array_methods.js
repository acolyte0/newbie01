let a1 = [1014,216,8418,35620,22,3225,929,1033,51];
a1.sort((a,b)=>{console.log(a,b); return a - b});
console.log(a1);
// console.log(Array.prototype.slice.call(a1));
function list1 () {
    return Array.prototype.slice.call(arguments);
}


let list1b = list1.bind(null, 37);
console.log(list1b(3,6,8));