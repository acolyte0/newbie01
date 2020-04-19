let str = 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen ninteen twenty twenty-one twenty-two';

let a1 = str.split(' ');


let nlimit = 3;
let numberOfDividedValue = a1.length / nlimit;

let setOfArrays = [];
// main loop
for(i = 0, j = 0; i < numberOfDividedValue; i++, j += nlimit) {
    /*
    Variable j will be used in the loop that inserts 4 or less elements into the array(arrayToPushStage1), which will be pushed into the final array(setOfArrays). When inner loop is finished and pushing to setOfArrays is done, variable j is added with nlimit at the next step of main loop and will be used to continue getting the right index of source array.
    */
    let arrayToPushStage1 = [];

    // inner loop
    for(k = 0; k < nlimit; k++) {
        // create each array to push
        if(typeof a1[j + k] == 'undefined') {
            break;
        }
        arrayToPushStage1.push(a1[j + k]);
    }
    setOfArrays.push(arrayToPushStage1);
}

console.log(numberOfDividedValue);
console.log(setOfArrays);