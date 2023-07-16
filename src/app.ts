var smallestSufficientTeam = function (
    req_skills: string[],
    people: string[][]
) {
    const n = people.length,
        m = req_skills.length
    const skillId = new Map()
    for (let i = 0; i < m; i++) {
        skillId.set(req_skills[i], i)
    }

    const skillsMaskOfPerson = Array.from({ length: n }, () => 0)
    for (let i = 0; i < n; i++) {
        for (const skill of people[i]) {
            skillsMaskOfPerson[i] |= 1 << skillId.get(skill)
        }
    }

    const dp = Array.from({ length: 1 << m }, () => (1 << n) - 1)
    dp[0] = 0

    for (let skillsMask = 1; skillsMask < 1 << m; skillsMask++) {
        for (let i = 0; i < n; i++) {
            let smallerSkillsMask = skillsMask & ~skillsMaskOfPerson[i]
            if (smallerSkillsMask !== skillsMask) {
                let peopleMask = dp[smallerSkillsMask] | (1 << i)
                if (peopleMask < dp[skillsMask]) {
                    dp[skillsMask] = peopleMask
                }
            }
        }
    }

    const answerMask = dp[(1 << m) - 1]
    const answer = []
    for (let i = 0; i < n; i++) {
        if (((answerMask >> i) & 1) === 1) {
            answer.push(i)
        }
    }

    return answer
}

console.log(
    smallestSufficientTeam(
        ["java", "nodejs", "reactjs"],
        [["java"], ["nodejs"], ["nodejs", "reactjs"]]
    )
)
