const fs = require('fs');


let words01 = JSON.parse(fs.readFileSync('./json_files/file002.json'));

words01.forEach((t) => {
    delete t.id;
});

fs.writeFile(
    './json_files/file003.json',
    JSON.stringify(words01, null, 4),
    (err) =>err && console.log(err)
);
