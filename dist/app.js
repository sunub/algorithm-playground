"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smallestSufficientTeam = function (req_skills, people) {
    const dp = new Map();
    const answer = [];
    let start = 0;
    for (let i = 0; i < req_skills.length; i++) {
        dp.set(req_skills[i], 0);
    }
    backtracking(0, new Set(), []);
    function backtracking(i, accept, a) {
        if (i >= people.length) {
            return;
        }
        for (let start = i; start < people.length; start++) {
            for (const skill of people[i]) {
                dp.has(skill) ? dp.set(skill, dp.get(skill) + 1) : null;
                accept.add(skill);
            }
            a.push(people[i]);
            backtracking(i + 1, accept, a);
            a.pop(people[i]);
        }
    }
};
console.log(smallestSufficientTeam(["java", "nodejs", "reactjs"], [["java"], ["nodejs"], ["nodejs", "reactjs"]]));
//# sourceMappingURL=app.js.map