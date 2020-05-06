let body = document.body;

function pasteEs(...args) {
    for(p of args) {
        body.appendChild(p);
    }
}

function cE(tag, s) {
    let temp = document.createElement(tag);
    Object.assign(temp.style, s);
    return temp;
}

function cTN(str) {
    return document.createTextNode(str);
}

let heading1 = cE(
    'h1',
    {
        color: '#ffb84d',
        backgroundColor: 'black',
        padding: '16px',
        textAlign: 'center'
    }
);

let menuBlock01 = cE(
    'div',
    {
        display: 'block',
        backgroundColor: '#cc9900'
    }
)

let ul01 = cE(
    'ul',
    {
        display: 'table',
        backgroundColor: 'gray',
        margin: '0 auto',
        listStyle: 'none'
    }
)

let li01 = cE(
    'li',
    {
        display: 'block'
    }
)

let aLink01 = cE(
    'a',
    {
        display: 'block',
        padding: '8px',
        backgroundColor: '#997300',
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none'
    }
);
aLink01.appendChild(cTN('list 01'));

aLink01.addEventListener(
    'mouseover',
    (e)=>{
        e.target.style.backgroundColor = 'black';
    }
);
aLink01.addEventListener(
    'mouseout',
    (e)=>{
        e.target.style.backgroundColor = '#997300';
    }
);

aLink01.setAttribute('href', 'https://www.naver.com')
li01.appendChild(aLink01);
ul01.appendChild(li01);
menuBlock01.appendChild(ul01);

heading1.appendChild(cTN('Heading 1'));

pasteEs(heading1, menuBlock01);