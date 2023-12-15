// 1125. Smallest Sufficient Team

// In a project, you have a list of required skills req_skills, and a list of people. The ith person people[i] contains a list of skills that the person has.

// Consider a sufficient team: a set of people such that for every required skill in req_skills, there is at least one person in the team who has that skill. We can represent these teams by the index of each person.

// For example, team = [0, 1, 3] represents the people with skills people[0], people[1], and people[3].
// Return any sufficient team of the smallest possible size, represented by the index of each person. You may return the answer in any order.

// It is guaranteed an answer exists.

// Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
// Output: [0,2]

// Input: req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]
// Output: [1,2]

/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var jsAnswer = function (req_skills, people) {
    const skillIndexMap = new Map()

    req_skills.forEach((skill, index) => skillIndexMap.set(skill, index))

    const skillTeamMap = new Map([[0, []]])

    people.forEach((skills, index) => {
        let hisSkills = 0

        for (const skill of skills) {
            hisSkills |= 1 << skillIndexMap.get(skill)
        }

        for (const [currSkill, team] of skillTeamMap) {
            const totalSkills = currSkill | hisSkills

            if (totalSkills === currSkill) {
                continue
            }

            if (
                !skillTeamMap.has(totalSkills) ||
                team.length + 1 < skillTeamMap.get(totalSkills)!.length
            ) {
                skillTeamMap.set(totalSkills, [...team, index])
            }
        }
    })

    return skillTeamMap.get((1 << req_skills.length) - 1)
}

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
