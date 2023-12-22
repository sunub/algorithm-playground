var calcEquation = function (equations, values, queries) {
    const uf = new UnionFind();

    for (let i = 0; i < equations.length; i += 1) {
        const [dividend, divisor] = equations[i];
        const quotient = values[i];

        uf.union(dividend, divisor, quotient);
    }

    const results = Array.from({ length: queries.length }, () => 0);
    for (let i = 0; i < queries.length; i += 1) {
        const [dividend, divisor] = queries[i];

        if (!uf.weight.has(dividend) || !uf.weight.has(divisor)) {
            results[i] = -1;
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

    find(node) {
        if (!this.weight.has(node)) {
            this.weight.set(node, {
                key: node,
                value: 1,
            });
        }

        const entry = this.weight.get(node);
        if (entry.key !== node) {
            const newEntry = this.find(entry.key);
            this.weight.set(node, {
                key: newEntry.key,
                value: newEntry.value * entry.value,
            });
        }

        return this.weight.get(node);
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

const equations = [
        ["a", "b"],
        ["b", "c"],
    ],
    values = [2.0, 3.0],
    queries = [
        ["a", "c"],
        ["b", "a"],
        ["a", "e"],
        ["a", "a"],
        ["x", "x"],
    ];

console.log(calcEquation(equations, values, queries));
