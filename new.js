function add(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function sum(arr) {
    return arr.reduce((s, i) => s + i, 0);
}

export { add, sum };