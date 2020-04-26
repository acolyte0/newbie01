let body = document.body;


let string1 = document.createElement('p');
string1.appendChild(document.createTextNode('the string'));

function onMouseOver(t) {
    t.style.color = 'white';
}

function onMouseOut(t) {
    t.style.color = 'gray';
}

let box1 = document.createElement('div');
Object.assign(box1.style, {
    width: 0,
    height: 0,
    backgroundColor: 'green',
    display: 'block'
});

function sInt(t) {
    if(t.style.width == '0px') {
        let inc = 0;
        function grow(t) {
            if(inc > 500) {
                clearInterval(sI);
                t.appendChild(string1);
            } else{
                t.style.width = inc + 'px';
                t.style.height = inc + 'px';
                inc+= 10;
                console.log(t.style.width);
            }
        }
        let sI = setInterval(grow.bind(null, t), 5);
    } else {
        t.removeChild(t.childNodes[0]);
        let inc = 500;
        function grow(t) {
            if(inc < 0) {
                clearInterval(sI);
            } else{
                t.style.width = inc + 'px';
                t.style.height = inc + 'px';
                inc-= 10;
                console.log(t.style.width);
            }
        }
        let sI = setInterval(grow.bind(null, t), 5);

    } 
}

let b1 = document.createElement('button');
b1.appendChild(document.createTextNode('start'));
Object.assign(b1.style, {
    display: 'block',
    padding: '16px',
    margin: '32px',
    backgroundColor: 'black',
    color: 'gray',
    borderRadius: '4px',
    font: '1.5rem verdana'
});
b1.setAttribute('onmouseover', 'onMouseOver(this)');
b1.setAttribute('onmouseout', 'onMouseOut(this)');
body.appendChild(box1);
b1.addEventListener('click', sInt.bind(null, box1));
body.appendChild(b1);