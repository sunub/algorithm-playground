const o = {}
let bValue = 38

Object.defineProperty(o, "b", {
    enumerable: true,
    configurable: true,
    get() {
        return bValue
    },
    set(newValue) {
        return (bValue = newValue)
    },
})

console.log(o.b)
o.b = 44
console.log(o.b)
console.log(bValue)
