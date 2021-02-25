async function f0point0001(p1) {
    return new Promise(
        (resolve, reject) => {
            p1 == 0 ? reject('f0.0001 - number is 0') : resolve(p1);
        }
    );
}

async function f0point001(p1) {
    return new Promise(
        async (resolve, reject) => {
            try {
                let r = await f0point0001(p1);
                r == 1 ? reject('f0.001 - number is 1') : resolve(r);
            } catch (err) {
                reject(err);
            }

        }
    );
}

async function f0point01(p1) {
    return new Promise(
        async (resolve, reject) => {
            try {
                let r = await f0point001(p1);
                r == 2 ? reject('f0.01 - number is 2') : resolve(r);
            } catch (err) {
                reject(err);
            }

        }
    );
}

async function f0point1(p1) {
    return new Promise(
        async (resolve, reject) => {
            try {
                let r = await f0point01(p1);
                r == 3 ? reject('f0.1 - number is 3') : resolve(r);
            } catch (err) {
                reject(err);
            }

        }
    );
}

async function f1(p1) {
    return new Promise(
        async (resolve, reject) => {
            try {
                let r = await f0point01(p1);
                r == 4 ? reject('f1 - number is 4') : resolve(r);
            } catch (err) {
                reject(err);
            }

        }
    );
}

f1(2).then(r => console.log(r, ' reached final')).catch(err => console.log(err));