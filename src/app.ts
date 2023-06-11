const bb: any = {}
bb["a"] = 3
bb["b"] = 3
bb["a"] = 5

const b = new Map()
b.set(1, Object.assign({}, bb))
bb["a"] = 4
console.log(b)
console.log(bb)
const c = BigInt(3)
console.log(c)
