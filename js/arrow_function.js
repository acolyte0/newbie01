class human {
    constructor(n) {
        this.name = n
    }
    say() {
        let doIt = () => console.log('arrow: ' + this.name);
        doIt();
    }
    speak(t) {
        function doThis(t) {
            if(this.name != null) {
                console.log('function: ' + t.toString());
            } else {
                console.log('null')
            }
        }
        doThis(t); // global function doesn't work with this.name
    }
}

let Pete = new human('Pete');

Pete.say();
Pete.speak(this.name);