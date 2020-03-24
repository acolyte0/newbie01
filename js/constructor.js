const obj1 = () => {
    class whatever {
        constructor (name) {
            this.name = name
        }
    }
    return whatever;
}

const obj2 = obj1();
let person1 = new obj2('Brad');

console.log(person1.name);