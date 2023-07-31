// var minimumDeleteSum = function(s1: string, s2: string) {
//     const memo = new Map();

//     function search(start: number, key: string) {
//         if(memo.has(start)) {
//             return memo.get(start)
//         }

//         for(let i = start; i < s2.length; i++) {
//             key += s2[i];
//             memo.set(key, deleteCompareString(key))
//             search(i + 1, key);
//             key = key.substring(0, key.length - 1)
//         }
//     }

//     function deleteCompareString(target: string) {

//     }
// };
// function mapping(map: Map<string, number>, s: string) {
//     return map.has(s) ? map.set(s, map.get(s)! + 1) : map.set(s, 1)
// }
// console.log(minimumDeleteSum("delete", "leet"))

const a = "e";
console.log(a.substring(0, a.length - 1))