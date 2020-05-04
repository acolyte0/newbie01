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

heading1.appendChild(cTN('Heading 1'));

pasteEs(heading1);