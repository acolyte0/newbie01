const fs = require('fs');
// ----------------------------------------------
// let words01 = JSON.parse(
//     fs.readFileSync(
//         './json_files/file002.json'
//     )
// );

// words01.push(
//     {
//         id: words01.length + 1,
//         word: 'abysmal',
//         type: 'adjective',
//         meaning: 'extremely bad or unfathomably appalling'
//     }
// );

// fs.writeFileSync(
//     './json_files/file001.json',
//     JSON.stringify(words01, null, 4)
// );


// -----------------------------------------------

// fs.readFile(
//     './json_files/file001.json',
//     (err, data) => {
//         if(err) throw err;
//         let result = JSON.parse(data);
//         console.log(result[5]);
//     }
// );

// console.log('final line');

// -----------------------------------------------
// using require function only works for using file once; it's the globally available method.

// 'use strict';
// let data1 = require('./json_files/file001.json');

// console.log(data1);

// -----------------------------------------------

// let sample01 = {
//     name: 'Brad',
//     gender: 'male',
//     age: 46
// }

// let jsonSample01 = JSON.stringify(sample01);

// fs.writeFileSync(
//     './json_files/sample01.json',
//     jsonSample01
// );

// -----------------------------------------------

// stringify(target, line, number of indents)
// let sample02 = {
//     name: 'Mike',
//     gender: 'male',
//     age: 66
// }

// let jsonSample02 = JSON.stringify(sample02, null, 2);

// fs.writeFileSync(
//     './json_files/sample02.json',
//     jsonSample02
// );

// -----------------------------------------------

// let sample03 = {
//     name: 'Sara',
//     gender: 'female',
//     age: 6
// }

// let jsonSample03 = JSON.stringify(sample03, null, 2);

// fs.writeFile(
//     './json_files/sample03.json',
//     jsonSample03,
//     (err) => {
//         if(err) throw err;
//         console.log('inside callback function.');
//     }
// );

// console.log('end of line');

// -----------------------------------------------

/*
fs.writeFile(
    './json_files/sample04.json',
    JSON.stringify([{first: 'one', second: 'two', third: 'three'}]),
    (err)=>{
        if(err) throw err;
        fs.readFile(
            './json_files/sample04.json',
            (err, data) => {
                if(err) throw err;
                let wTA = {fourth: 'four', fifth: 'five'};
                let obj1 = JSON.parse(data);
                obj1.push(wTA);
                fs.writeFile(
                    './json_files/sample04.json',
                    JSON.stringify(obj1, null, 4),
                    (err)=>{
                        if(err) throw err;
                        console.log('3rd callback is done');
                    }
                );
                console.log('2nd callback is done');
            }
        );
        console.log('1st callback is done.');
    }
);
*/
let tname = './json_files/sample04.json';

const fw = (filename, content) => new Promise(
    (resolve, reject) =>{
        fs.writeFile(
            filename,
            JSON.stringify(content, null, 4),
            (err)=> {
                if(err) reject(err);
                console.log('1 writing is done.')
                resolve(1);
            }
        );
    }
);

const fr = (t) => new Promise(
    (resolve, reject) => {
        fs.readFile(
            t,
            (err, data) => {
                if(err) reject(err);
                resolve(JSON.parse(data));
                console.log('2 reading is done.')
            }
        );
    }
);

const fp = (t, obj) => {
    t.push(obj);
    console.log('now returning t.')
    return t;
}

function combined01() {}

combined01.prototype = {
    fw: fw,
    fr: fr,
    fp: fp
}

const combined02 = new combined01();

combined02.fw(
    tname, [{first: 'one'}]
).then(
    (t)=> {if(t) return combined02.fr(tname)}
).then(
    (data)=>{return combined02.fw(tname, combined02.fp(data,{second: 'two'}));}
).then(
    (t)=> {if(t) console.log('done')}
).catch(
    err=>console.log(err)
)

// fw(
//     tname, [{first: 'one'}]
// ).then(
//     (t)=> {if(t) return fr(tname)}
// ).then(
//     (data)=>{return fw(tname, fp(data,{second: 'two'}));}
// ).then(
//     (t)=> {if(t) console.log('done')}
// ).catch(
//     err=>console.log(err)
// )
