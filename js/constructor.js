const obj1 = () => {
    class whatever {
        constructor (name) {
            this.name = name,
            this.f2 = function() {return name.toUpperCase()}
        }

        some_codes(a) {
            let inside1 = {property1: 'string of property one.',property2: 'string of property two'}
            return inside1['property' + a];
        }

        show_string(b) {
            console.log(this.some_codes(b));
        }
    }
    return whatever;
}


const obj001 = obj1();
let person1 = new obj001('Brad');

// console.log(person1.name);

person1.show_string(2);
