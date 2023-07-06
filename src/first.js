function calculateDaysBetweenDates(date1, date2) {
    // your code goes here
    date1 = new Date(date1)
    date2 = new Date(date2)
    var Difference_In_Time = date2.getTime() - date1.getTime()
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
    return Difference_In_Days
}

const HA = (name) => (call) => {
    console.log("outside")
    const a = name
    const b = call
    console.log(a)
    console.log(b)
    return function Callme(ahah) {
        console.log("inside")
        return { name: ahah }
    }
}

console.log(1)
const n = HA("choi")
const a = n("baby")
console.log(2)
// console.log(n("a"))
// console.log(a)
// console.log(a("call me"))
