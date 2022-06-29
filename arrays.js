function addToBack(n) {
    const arr = [];
    for (let i = 0 ; i < n ; i++) {
        arr.push(i+1);
    }
    return arr;
}

function addToFrontPreallocated(n){
    const arr = new Array(n);
    for ( let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

function addToFront(n) {
    const arr = [];
    for (let i = 0 ; i < n ; i++) {
        arr.unshift(n - i);
    }
    return arr;
}

n = 100000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimeBack = Date.now();
arr = addToFrontPreallocated(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFrontPreallocated(" + n + ") = " + (endTimeFront - startTimeFront) + "ms");

console.log("addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms");

// addToBack(50000) = 4ms
// addToFront(50000) = 194ms
