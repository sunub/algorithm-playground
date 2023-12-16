// 1168. Optimize Water Distribution in a Village

// 한 마을에 n개의 집이 있습니다. 우물을 만들고 파이프를 설치하여 모든 집에 물을 공급하고 싶습니다.

// 각 집 i에 대해 비용 wells[i - 1](0 인덱싱으로 인해 -1에 유의)을 사용하여 집 안에 직접 우물을 짓거나 다른 우물에서 파이프를 통해 물을 공급할 수 있습니다. 집 사이에 파이프를 놓는 데 드는 비용은 배열 파이프로 주어지며, 각 pipes[j] = [house1j, house2j, costj]는 파이프를 사용하여 house1[j]와 house2[j]를 연결하는 데 드는 비용을 나타냅니다. 연결은 양방향이며, 동일한 두 집 사이에 비용이 다른 여러 개의 유효한 연결이 있을 수 있습니다.

// 모든 주택에 물을 공급하는 데 드는 최소 총 비용을 반환합니다.

/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {};

class UnionFind {
    constructor() {
        this.weigth = new Map();
    }

    find(x) {
        if (!this.weigth.has(x)) {
            this.weigth.set(x, {
                node: x,
                cost: 1,
            });
        }

        const entry = this.weigth.get(x);
        if (entry.node !== x) {
            const newEntry = this.find(entry.node);
            this.weigth.set(x, {
                node: newEntry.node,
                cost: newEntry.cost,
            });
        }
        return this.weigth.get(x);
    }

    union(x, y, cost) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        const rootXNode = rootX.node;
        const rootXCost = rootX.cost;
        const rootYNode = rootY.node;
        const rootYCost = rootY.cost;

        if (rootX.node !== rootY.node) {
            const newCost = Math.min(rootXCost, rootYCost) + cost;
            for (const [node, entry] of this.weigth.entries()) {
                if (entry.node === rootXNode) {
                    this.weigth.set(node, {
                        node: rootYNode,
                        cost: newCost,
                    });
                }
            }
            this.weigth.set(rootYNode, {
                node: rootYNode,
                cost: newCost,
            });
        }
    }
}

const n = 3,
    wells = [1, 2, 2],
    pipes = [
        [1, 2, 1],
        [2, 3, 1],
    ];

console.log(minCostToSupplyWater(n, wells, pipes)); // 3
// const newWeight = (divisorWeight * value) / dividendWeight;
// for (const [key, entry] of this.weight.entries()) {
//     if (entry.key === dividendGid) {
//         this.weight.set(key, {
//             key: divisorGid,
//             value: entry.value * newWeight,
//         });
//     }
// }
// this.weight.set(dividendGid, {
//     key: divisorGid,
//     value: newWeight,
// });
