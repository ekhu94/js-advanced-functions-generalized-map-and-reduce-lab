const map = (arr, func) => {
    return arr.map(n => func(n));
}

const reduce = (arr, func, val=null) => {
    let output = !!val ? val : arr[0];
    for (let i = !!val ? 0 : 1; i < arr.length; i++) {
        output = func(arr[i], output)
    }
    return output;
}