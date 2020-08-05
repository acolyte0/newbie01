function oneSecond(t) {
    return new Promise(
        (resolve, reject) => {
            if(typeof t != 'string') return reject('the result of 1sec is not a string.')
            setTimeout(()=>resolve(t), 1000);
        }
    );
}

function twoSeconds(t) {
    return new Promise(
        (resolve, reject) => {
            if(typeof t != 'string') return reject('the result of 2sec is not a string.')
            setTimeout(()=>resolve(t), 2000);
        }
    );
}

function threeSeconds(t) {
    return new Promise(
        (resolve, reject) => {
            if(typeof t != 'string') return reject('the result of 3sec is not a string.')
            setTimeout(()=>resolve(t), 3000);
        }
    );
}

async function wrap() {
    try {
    let three = await threeSeconds('hello...');
    console.log(three);
    let two = await twoSeconds('67');
    console.log(two);
    let one = await oneSecond('yo...');
    console.log(one);
    } catch (err) {
        console.log(err);
    }
}

wrap();

/*
threeSeconds('hello world...');
twoSeconds('eh...');
oneSecond('yo...');
*/