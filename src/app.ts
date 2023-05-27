function chunk(arr: any[], size: number): any[][] {
    const result = []
    while (arr.length) {
        result.push(arr.splice(0, size))
    }
    return result
}
console.log(chunk([1, 9, 6, 3, 2], 3))
