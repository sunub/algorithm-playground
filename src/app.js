var numOfArrays = function (n, m, k) {};

function givenAlgorithm(arr) {
    let [maxValue, maxIndex, searchCost] = [-1, -1, 0];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
            maxIndex = i;
            searchCost = searchCost + 1;
        }
    }

    return maxIndex;
}
console.log(numOfArrays(2, 3, 1));
