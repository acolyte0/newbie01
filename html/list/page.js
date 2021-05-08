// Adding scripts of the head tag ----------------------------------------------------------

let pHead = document.getElementsByTagName('head')[0];



// meta tags -----------------------------------------

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


// title tag --------------------------------

let pTitle = document.createElement('title');
let tTxt = document.createTextNode('The newbie\'s page');
pTitle.appendChild(tTxt);
pHead.appendChild(pTitle);


// css link ---------------------------------

let cssLink = document.createElement('link');
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('href', 'style.css');
pHead.appendChild(cssLink);


// end ------------------------------------------------------------------------------------

let applyStyle = (target, propValue) => {
    Object.assign(
        target.style,
        propValue
    );
}

// assigning body
let pBody = document.getElementsByTagName('body')[0];
applyStyle(
    pBody,
    {
        fontFamily: 'verdana',
        padding: '8px'
    }
)

// heading
let bTitleH1 = document.createElement('h1');
let bTH1Txt = document.createTextNode('This is a heading 1');
bTitleH1.appendChild(bTH1Txt);
applyStyle(
    bTitleH1,
    {
        margin: '0 0 16px 0'
    }
)
pBody.appendChild(bTitleH1);

// list
let ul01 = Array(4).fill(null);
let ul = document.createElement('ul');
applyStyle(
    ul,
    {
        listStyle: 'none'
    }
)


for (let  i = 0; i < ul01.length; i++) {
    ul01[i] = document.createElement('li');
    applyStyle(
        ul01[i],
        {
            margin: '0 0 16px 16px'
        }
    )
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    applyStyle(
        span1,
        {
            display: 'inline-block',
            width: '20px',
            textIndent: '0'
        }
    )

    applyStyle(
        span2,
        {
            display: 'inline-block',
            width: '20px',
            textIndent: '0'
        }
    )
    span1.appendChild(document.createTextNode(i+1 + '.'));
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    applyStyle(
        p1,
        {
            marginBottom: '8px'
        }
    )
    applyStyle(
        p2,
        {
            marginBottom: '8px'
        }
    )
    p1.appendChild(span1);
    p1.appendChild(document.createTextNode('List string ' + i));
    p2.appendChild(span2);
    p2.appendChild(document.createTextNode('2nd string'));

    ul01[i].appendChild(p1);
    ul01[i].appendChild(p2);
    // ul01[i].className = 'liStyle';
    ul.appendChild(ul01[i]);
}

pBody.appendChild(ul);

let tDate = Date.now();
let paraTag1 = document.createElement('p');
paraTag1.appendChild(document.createTextNode(tDate));

let hasInput001 = document.createElement('div');

applyStyle(
    hasInput001,
    {
        border: '1px solid gray',
        padding: '16px'
    }
);

let input001 = document.createElement('input');
input001.id = 'input001'
let hitIt = document.createElement('button');
let txtBttn = document.createTextNode('click this');
hitIt.appendChild(txtBttn);

let output001 = document.createElement('p');
output001.id = 'showOutput';

hasInput001.appendChild(input001);
hasInput001.appendChild(hitIt);
hasInput001.appendChild(output001);



document.body.appendChild(paraTag1);
document.body.appendChild(hasInput001);

hitIt.addEventListener(
    'click',
    (e) => {
        let value = document.querySelector('#input001').value;

        let value1 = value.replace(
            /[`']/g,
            '&apos;'
        ).replace(
            /[\"]/g,
            '&quot;'
        ).replace(
            /[=]/g,
            '&equals;'
        ).replace(
            /[:]/g,
            '&colon;'
        );
        console.log(value1);
        document.querySelector('#showOutput').innerHTML = value1 + 'valid';
    }
);

let block001 = document.createElement('div');

applyStyle(
    block001,
    {
        backgroundColor: 'gray',
        width: '64px',
        height: '64px',
        border: '2px solid pink',
        padding: '8px'
    }
)
let txtInsideBox = document.createTextNode('t1');
block001.appendChild(txtInsideBox);

document.body.appendChild(block001);