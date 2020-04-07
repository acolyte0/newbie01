/*
1 second = 1,000
1 minute = 60,000
1 hour = 360,000
1 day = 86,400,000
1 year = 31,536,000,000
 */

// const today1 = Date.now();// no argument
// const today2 = new Date(today1);
// console.log(today1);
// console.log(today2);
// console.log(today2.getUTCDate());
function getNumberOfDaysOfMonth(today) {
    today.setDate(1); // there's no 0 value on date
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    console.log('line 20: ' + today);
    console.log(today.getMonth());
    let tV1 = today.getTime();
    console.log('line 23: ' + tV1);
    let nextMonth = new Date(tV1); // must create another object
    nextMonth.setMonth(today.getMonth() + 1);
    console.log(today);
    console.log(nextMonth);
    let nV1 = nextMonth.getTime();
    console.log((nV1 - tV1) / 86400000);
}

let t1 = new Date();
getNumberOfDaysOfMonth(t1);