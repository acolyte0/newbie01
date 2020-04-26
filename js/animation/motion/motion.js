const body = document.body;
let b1 = document.createElement('button');
b1.appendChild(document.createTextNode('start'));
Object.assign(
    b1.style,
    {
        padding: '8px',
        color: 'white',
        backgroundColor: 'gray',
        font: '1.5rem verdana'
    }
);
let container = document.createElement('div');
Object.assign(
    container.style,
    {
        backgroundColor: 'gray',
        border: '1px solid black',
        width: '302px',
        height: '302px',
        overflow: 'hidden',
        position: 'relative'
    }
);
let box1 = document.createElement('div');
Object.assign(
    box1.style,
    {
        backgroundColor: 'green',
        color: 'white',
        width: '300px',
        height: '300px',
        position: 'absolute',
        top: '0px',
        left: '0px',
        padding: '16px'
    }
);

let str = document.createElement('p');
str.appendChild(document.createTextNode('The String'));
box1.appendChild(str);

function move(t) {
    if(t.style.left == '0px') {
        let pixel = 0;
        function motion1(t) {
            if(pixel > 300) {
                clearInterval(sM);
                console.log(t.style.left);
            } else {
                t.style.left = pixel + 'px';
                pixel++;
            }
        }
        let sM = setInterval(motion1.bind(null, t), 5);
    } else {
        let pixel = 300;
        function motion1(t) {
            if(pixel < 0) {
                clearInterval(sM);
                console.log(t.style.left);
            } else {
                t.style.left = pixel + 'px';
                pixel--;
            }
        }
        let sM = setInterval(motion1.bind(null, t), 5);
    }
}

container.appendChild(box1);
body.appendChild(container);

b1.addEventListener('click', move.bind(null, box1));

body.appendChild(b1);