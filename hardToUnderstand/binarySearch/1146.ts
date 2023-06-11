// 1146. Snapshot Array

// Implement a SnapshotArray that supports the following interface:

// SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.
// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id

class SnapshotArray {
    elements: number[][][]
    snapId: number
    constructor(length: number) {
        this.elements = Array(length)
            .fill(null)
            .map((el) => [])
        this.snapId = 0
    }
    set(index: number, val: number) {
        this.elements[index].push([val, this.snapId])
    }
    snap() {
        ++this.snapId
        return this.snapId - 1
    }
    get(index: number, snap_id: number) {
        const element = this.elements[index]
        let left = 0,
            right = element.length - 1,
            mid,
            id = -1

        while (left <= right) {
            mid = left + Math.floor((right - left) / 2)
            if (element[mid][1] <= snap_id) {
                id = mid
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return id === -1 ? 0 : element[id][0]
    }
}

class SnapshotArray2 {
    elements: number[][][]
    snapId: number
    constructor(length: number) {
        this.elements = Array(length)
            .fill(null)
            .map((el) => [])
        this.snapId = 0
    }
    set(index: number, val: number) {
        this.elements[index].push([val, this.snapId])
    }
    snap() {
        ++this.snapId
        return this.snapId - 1
    }
    get(index: number, snap_id: number) {
        const element = this.elements[index]
        let left = 0,
            right = element.length - 1,
            mid,
            id = -1

        while (left <= right) {
            mid = left + Math.floor((right - left) / 2)
            if (element[mid][1] <= snap_id) {
                id = mid
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return id === -1 ? 0 : element[id][0]
    }
}

/**
 * @param {number} length
 */
var SnapshotArray2 = function (length) {
    this.el = Array.from({ length: length }, (v, _) => (v = new Map()))
    this.id = 0
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
    this.el[index].set(this.id, val)
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    this.id += 1
    return this.id - 1
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    const element = Array.from(this.el[index].keys())
    let left = 0,
        right = element.length,
        mid = -1,
        id = -1
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (element[mid] <= snap_id) {
            id = element[mid]
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return id === -1 ? 0 : this.el[index].get(id)
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
