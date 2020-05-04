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
        display: 'block',
        padding: '8px',
        backgroundColor: '#997300',
        color: 'white'
    }
)

li01.appendChild(cTN('list 01'));
ul01.appendChild(li01);
menuBlock01.appendChild(ul01);

heading1.appendChild(cTN('Heading 1'));

pasteEs(heading1, menuBlock01);