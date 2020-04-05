const obj1 = () => {
    class whatever {
        constructor (name) {
            this.name = name,
            this.f2 = function() {return name.toUpperCase()}
        }
    }
    return whatever;
}


const obj001 = obj1();
let person1 = new obj001('Brad');

// console.log(person1.name);

console.log(person1.f2());
