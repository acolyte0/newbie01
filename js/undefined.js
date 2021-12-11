let noValue;
// noValue == null ? console.log(typeof noValue) : console.log('something');
function f1(target) {
    target != null ? typeof target : 'it is null'
}

console.log(f1());