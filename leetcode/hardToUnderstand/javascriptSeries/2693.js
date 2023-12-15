// 2693. Call Function with Custom Context
// Enhance all functions to have the callPolyfill method. The method accepts an object obj as it's first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).

// For example if you had the function:

// function tax(price, taxRate) {
//   const totalCost = price * (1 + taxRate);
//   console.log(`The cost of ${this.item} is ${totalCost}`);
// }
// Calling this function like tax(10, 0.1) will log "The cost of undefined is 11". This is because the this context was not defined.

// However, calling the function like tax.callPolyfill({item: "salad"}, 10, 0.1) will log "The cost of salad is 11". The this context was appropriately set, and the function logged an appropriate output.

// Please solve this without using the built-in Function.call method.

Function.prototype.callPolyfill = function (context, ...args) {
    const a = this.bind(context)
    return a(...args)
}

// explanation

function add(b) {
    return this.a + b
}

function minus(b) {
    return this.a + b
}

Function.prototype.callPolyfill = function (context, args) {
    // this = Function으로 add, minus 모두 속하므로 Function에 특정 값을 묶기 위해서는 this를 통해 Function에 bind하는 것이 옳다.
    return this.bind(context)(args)
}

// Using Object

Function.prototype.callPolyfill = function (context, args) {
    Object.defineProperty(context, "fn", {
        value: this,
        enumerable: false,
    })
    return context.fn(...args)
}

// Using Symbol

Function.prototype.callPolyfill = function (context, args) {
    const uniqueSymbol = Symbol()
    context[uniqueSymbol] = this
    const result = context[uniqueSymbol](...args)
    delete context[uniqueSymbol]

    return result
}
