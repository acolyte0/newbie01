const obj1 = () => {
    class whatever {
        constructor (name) {
            this.name = name,
            this.f1 = function() {return 'I am ' + name},
            this.f2 = function() {return name.toUpperCase()}
        }
    }
    return whatever;
}

const obj2 = obj1();
let person1 = new obj2('Brad');

// console.log(person1.name);

// console.log(person1.f1());
console.log(person1.f2());
