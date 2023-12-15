// 1335. Minimum Difficulty of a Job Schedule

// You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).

// You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done on that day.

// You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i].

// Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.

// Example 1:

// Input: jobDifficulty = [6,5,4,3,2,1], d = 2
// Output: 7
// Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
// Second day you can finish the last job, total difficulty = 1.
// The difficulty of the schedule = 6 + 1 = 7

// Example 2:

// Input: jobDifficulty = [9,9,9], d = 4
// Output: -1
// Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
    if (jobDifficulty.length < d) return -1

    const cache = {}

    const dfs = (start, numDays) => {
        if (numDays === d) {
            return start === jobDifficulty.length ? 0 : Infinity
        }

        const key = `${start}-${numDays}`
        if (cache[key] !== undefined) return cache[key]

        const end = jobDifficulty.length - d + numDays

        let result = Infinity
        let max = -Infinity

        for (let i = start; i <= end; i++) {
            max = Math.max(max, jobDifficulty[i])
            result = Math.min(result, max + dfs(i + 1, numDays + 1))
        }

        return (cache[key] = result)
    }
    return dfs(0, 0)
}
