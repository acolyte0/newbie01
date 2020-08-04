function oneSecond(t) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(()=>resolve(t), 1000);
        }
    );
}

function twoSeconds(t) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(()=>resolve(t), 2000);
        }
    );
}

function threeSeconds(t) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(()=>resolve(t), 3000);
        }
    );
}

async function wrap() {
    let three = await threeSeconds('hello world...');
    console.log(three);
    let two = await twoSeconds('eh...');
    console.log(two);
    let one = await oneSecond('yo...');
    console.log(one);
}

wrap();

/*
threeSeconds('hello world...');
twoSeconds('eh...');
oneSecond('yo...');
*/