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
let cssLink = document.createElement('link');
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('href', 'style.css');
pHead.appendChild(cssLink);

let pBody = document.getElementsByTagName('body')[0];
let bTitleH1 = document.createElement('h1');
let bTH1Txt = document.createTextNode('This is a heading 1');
bTitleH1.appendChild(bTH1Txt);
pBody.appendChild(bTitleH1);

let ul01 = Array(4).fill(null);
let ul = document.createElement('ul');
ul.className = 'ulStyle';
for (let  i = 0; i < ul01.length;i++) {
    ul01[i] = document.createElement('li');
    let span1 = document.createElement('span');
    span1.className = 'listGap';
    let span2 = document.createElement('span');
    span2.className = 'listGap';
    span1.appendChild(document.createTextNode(i+1 + '.'));
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.appendChild(span1);
    p1.appendChild(document.createTextNode('List string ' + i));
    p2.appendChild(span2);
    p2.appendChild(document.createTextNode('2nd string'));

    ul01[i].appendChild(p1);
    ul01[i].appendChild(p2);
    ul01[i].className = 'liStyle';
    ul.appendChild(ul01[i]);
}

pBody.appendChild(ul);