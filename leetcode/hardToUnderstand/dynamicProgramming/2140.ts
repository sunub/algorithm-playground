/**
 * @example
 *
 * You are given a 0-indexed 2D integer array questions where questions[i] = [pointsi, brainpoweri].
 *
 * The array describes the questions of an exam, where you have to process the questions in order (i.e., starting from question 0) and make a decision whether to solve or skip each question. Solving question i will earn you pointsi points but you will be unable to solve each of the next brainpoweri questions. If you skip question i, you get to make the decision on the next question.
 *
 * For example, given questions = [[3, 2], [4, 3], [4, 4], [2, 5]]:
 * If question 0 is solved, you will earn 3 points but you will be unable to solve questions 1 and 2.
 * If instead, question 0 is skipped and question 1 is solved, you will earn 4 points but you will be unable to solve questions 2 and 3.
 *
 * Return the maximum points you can earn for the exam.
 *
 * @argument { Input: questions = [[3,2],[4,3],[4,4],[2,5]] }
 * @returns { Output: 5 }
 *
 * @argument { Input: questions = [[1,1],[2,2],[3,3],[4,4],[5,5]] }
 * @returns { Output: 7 }
 */

var mostPoints = function (questions) {
    let totalQuestions = questions.length

    let map = new Map()

    const helper = (index) => {
        if (map.has(index)) return map.get(index)

        if (index >= totalQuestions) {
            return 0
        }

        let solve =
            questions[index][0] + helper(index + questions[index][1] + 1)

        let skip = helper(index + 1)

        let res = Math.max(solve, skip)

        map.set(index, res)

        return res
    }

    return helper(0)
}
