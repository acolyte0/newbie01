let o1 = {
    first: 'Hello, ',
    second: 'I ',
    third: 'am ',
    f1: function() {
        return this.first + this.second + this.third;
    },
    f2: function(str1, str2) {
        return this.first + this.second + this.third + str1 + ' ' + str2;
    } 
}

let o11 = {
    first: 'Good ',
    second: 'evening ',
    third: '...'
}

console.log(o1.f1());

let o2 = o1.f1;

console.log(o2());

let o3 = o2.bind(o1);
console.log(o3());

console.log(o1.f2());
let o4 = o1.f2.bind(o11, 'blah...');
console.log(o4('2nd'));