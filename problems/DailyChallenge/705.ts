// 705. Design HashSet

// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

/**
 * @argument { Input : ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"] }
 * @returns { Output : [null, null, null, true, false, null, true, null, false]}
 */

var MyHashSet = function () {
    this.set = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (!this.set.includes(key)) {
        this.set.push(key)
    }
    return this.set
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    if (this.set.includes(key)) {
        const index = this.set.indexOf(key)
        this.set = [
            ...this.set.slice(0, index),
            ...this.set.slice(index + 1, this.set.length),
        ]
    }
    return this.set
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.set.includes(key)
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
