// 1396. Design Underground System

// An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

// Implement the UndergroundSystem class:

// void checkIn(int id, string stationName, int t)
// A customer with a card ID equal to id, checks in at the station stationName at time t.
// A customer can only be checked into one place at a time.
// void checkOut(int id, string stationName, int t)
// A customer with a card ID equal to id, checks out from the station stationName at time t.
// double getAverageTime(string startStation, string endStation)
// Returns the average time it takes to travel from startStation to endStation.
// The average time is computed from all the previous traveling times from startStation to endStation that happened directly, meaning a check in at startStation followed by a check out from endStation.
// The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.
// There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.
// You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order.

var UndergroundSystem = function () {
    this.data = new Map()
    this.takeTimes = new Map()
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.data.set(id, { station: stationName, time: t })
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const startPoint = this.data.get(id).station
    const startTime = this.data.get(id).time

    const key = `${startPoint} ${stationName}`
    const spendTime = t - startTime
    this.takeTimes.has(key)
        ? this.takeTimes.set(key, [...this.takeTimes.get(key), spendTime])
        : this.takeTimes.set(key, [spendTime])
    return spendTime
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
    startStation,
    endStation
) {
    let key = `${startStation} ${endStation}`
    const takeTime = this.takeTimes.get(key)

    if (takeTime.length > 0) {
        const times = takeTime.length
        const totalTime = takeTime.reduce((acc, cur) => acc + cur)
        return (totalTime / times).toFixed(5)
    } else takeTime
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
