// 274. H-Index

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Input: citations = [3,0,6,1,5]
// Output: 3

// Input: citations = [1,3,1]
// Output: 1

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let n = citations.length
    let papers = Array.from({ length: n + 1 }, () => 0)

    for (let c of citations) {
        papers[Math.min(n, c)]++
    }

    let k = n
    for (let s = papers[n]; k > s; s += papers[k]) {
        k -= 1
    }

    return k
}
