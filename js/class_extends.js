class Polygon {
    constructor (height, width) {
        this.name = 'Polygon';
        this.width = width;
        this.height = height;
    }

    sayName() {
        console.log(`Hi, I am a ${this.name}.`);
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
        'and gonia (angle).');
    }
}

class Poly {
    getPolyName() {
        console.log('Hi. I was created with a Class expression. My name is '
         + Poly.name );
    }
}

const MyPoly = new Poly();

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        this.area = value;
    }
}

let s = new Square(5);
// s.sayName();
// console.log(s.area);

class Rectangle extends Polygon {
    constructor (width, height) {
        super(height, width);
        this.name = 'Rectangle';
    }

    sayName() {
        console.log(`My name is ${this.name}.`);
        super.sayHistory();
    }
}

let r = new Rectangle(50, 60);

r.sayName();

// https://googlechrome.github.io/samples/classes-es6/index.html