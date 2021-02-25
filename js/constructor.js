const obj1 = () => {
    class whatever {
        constructor (name, name2) {
            this.name = name,
            this.name2 = name2,
            this.f2 = function() {return name.toUpperCase() + ' ' + name2.toUpperCase()}
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
// let person1 = new obj001('Brad');

class person01 extends obj001 {
    constructor(n, n2, str) {
        super(n, n2);
        this.str = str;
    }

    sayNameAndStr() {
        console.log(this.f2(), this.str);
    }
}

let test01 = new person01('bob', 'wyatt', 'nothing');

test01.sayNameAndStr();

// console.log(person1.name);

// test01.show_string(2);
