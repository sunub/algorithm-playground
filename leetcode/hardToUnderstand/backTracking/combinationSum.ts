function combinationSum(candidates: number[], target: number): number[][] {
    let solution: number[][] = []
    let currSolution: number[] = []

    backtrack(candidates, target, currSolution, solution, 0)
    return solution
}

function backtrack(
    candidates: number[],
    target: number,
    currSolution: number[],
    solution: number[][],
    strIndex: number
) {
    if (target < 0) return
    if (target === 0) {
        solution.push([...currSolution])
        return
    }

    for (let i = strIndex; i < candidates.length; i++) {
        let curTarget = target - candidates[i]
        currSolution.push(candidates[i])
        backtrack(candidates, curTarget, currSolution, solution, i)
        currSolution.pop()
    }
}
