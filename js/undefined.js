let noValue;
// noValue == null ? console.log(noValue.toString()) : console.log('something');
function f1(target) {
    target != null ? target.toString() : 'it is null'
}

console.log(f1());