var join = function (arr1: any[], arr2: any[]) {
    const id1 = []
    const id2 = []
    for (let i = 0; i < arr1.length; i++) {
        id1.push(arr1[i].id)
    }
    for (let i = 0; i < arr2.length; i++) {
        id2.push(arr2[i].id)
    }

    console.log(id1)
    console.log(id2)
}
console.log(
    join(
        [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
        [{ id: 1, b: { c: 84 }, v: [1, 3] }]
    )
)
