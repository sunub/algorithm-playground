/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const uf = new UnionFind();

    // Step 1). union groups 생성
    for (let i = 0; i < equations.length; i++) {
        const [dividend, divisor] = equations[i];
        const quotient = values[i];

        uf.union(dividend, divisor, quotient);
    }

    // Step 2). find() 함수 내에서 "lazy"한 업데이트로 계산 실행
    const results = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const [dividend, divisor] = queries[i];

        if (!uf.weight.has(dividend) || !uf.weight.has(divisor)) {
            // case 1). 적어도 하나의 변수가 이전에 나타나지 않은 경우
            results[i] = -1.0;
        } else {
            const dividendEntry = uf.find(dividend);
            const divisorEntry = uf.find(divisor);

            const dividendGid = dividendEntry.key;
            const divisorGid = divisorEntry.key;
            const dividendWeight = dividendEntry.value;
            const divisorWeight = divisorEntry.value;

            if (dividendGid !== divisorGid) {
                // case 2). 변수가 동일한 체인/그룹에 속하지 않는 경우
                results[i] = -1.0;
            } else {
                // case 3). 변수 간에 경로/체인이 존재하는 경우
                results[i] = dividendWeight / divisorWeight;
            }
        }
    }

    return results;
};

class UnionFind {
    constructor() {
        this.weight = new Map();
    }

    find(nodeId) {
        if (!this.weight.has(nodeId)) {
            this.weight.set(nodeId, { key: nodeId, value: 1 });
        }

        const entry = this.weight.get(nodeId);
        if (entry.key !== nodeId) {
            const newEntry = this.find(entry.key);
            this.weight.set(nodeId, {
                key: newEntry.key,
                value: newEntry.value * entry.value,
            });
        }

        return this.weight.get(nodeId);
    }

    union(dividend, divisor, value) {
        const dividendEntry = this.find(dividend);
        const divisorEntry = this.find(divisor);

        const dividendGid = dividendEntry.key;
        const divisorGid = divisorEntry.key;
        const dividendWeight = dividendEntry.value;
        const divisorWeight = divisorEntry.value;

        if (dividendGid !== divisorGid) {
            const newWeight = (divisorWeight * value) / dividendWeight;
            for (const [key, entry] of this.weight.entries()) {
                if (entry.key === dividendGid) {
                    this.weight.set(key, {
                        key: divisorGid,
                        value: entry.value * newWeight,
                    });
                }
            }
            this.weight.set(dividendGid, {
                key: divisorGid,
                value: newWeight,
            });
        }
    }
}
