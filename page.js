let pHead = document.getElementsByTagName('head')[0];
let meta = [];
meta[0] = document.createElement('meta');
Object.assign(
    meta[0],
    {
        httpEquiv: "content-type",
        content: "text/html; charset=UTF-8"
    }
);
meta[1] = document.createElement('meta');
Object.assign(
    meta[1],
    {
        name: "description",
        content: "practicing for creating a web page"
    }
);
meta[2] = document.createElement('meta');
Object.assign(
    meta[2],
    {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
    }
);
for(e of meta) {
    pHead.appendChild(e);
}

let pTitle = document.createElement('title');
let tTxt = document.createTextNode('The newbie\'s page');
pTitle.appendChild(tTxt);
pHead.appendChild(pTitle);