// JSON string series

var jsonStringify = function (object: any) {
    if (object === null) {
        return `null`
    }
    if (typeof object === "string") {
        return '"' + object + '"'
    }
    if (typeof object === "boolean" || typeof object === "number") {
        return `${object}`
    }
    if (object instanceof Array) {
        const items: string = object
            .map((item) => jsonStringify(item))
            .join(",")
        return `[${items}]`
    }
    if (object instanceof Object) {
        const keys = [...Object.keys(object)]
        const items = keys
            .map((key) => `"${key}":${jsonStringify(object[key])}`)
            .join(",")
        return `{${items}}`
    }
}
