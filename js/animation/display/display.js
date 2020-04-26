const body = document.body;

let b1 = document.createElement('button');

b1.appendChild(document.createTextNode('start'));
body.appendChild(b1);
let h1 = document.querySelector('#heading');
let container = document.querySelector('#container');

h1.appendChild(document.createTextNode('string'));
container.style.display = 'none';
Object.assign(container.style, {
    border: '1px solid black',
    padding: '16px'
});
h1.style.display = 'none';

function f1() {
    if(h1.style.display != 'block' && container.style.display != 'block') {
        container.style.display = 'block';
        let cHeight = 0;
        setTimeout(
            ()=>{
                h1.style.display = 'block';
            },
            1000
        );
        return;
    }
    setTimeout(
        ()=>{
            h1.style.display = 'none';
        },
        1000
    );
    setTimeout(
        ()=>{
            container.style.display = 'none';
        },
        2000
    );
    
    return;
}

b1.addEventListener('click', f1);