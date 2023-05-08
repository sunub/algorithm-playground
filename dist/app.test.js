"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onGoingProblem_1 = require("./onGoingProblem");
const onGoingProblem_2 = require("./onGoingProblem");
const mock = jest.mock("./onGoingProblem");
test("A problem currently being solved", () => {
    for (let i = 0; i < onGoingProblem_2.input.length; i++) {
        console.time("timer");
        expect((0, onGoingProblem_1.default)(onGoingProblem_2.input[i])).toBe(onGoingProblem_2.answers[i]);
        console.timeEnd("timer");
    }
});
//# sourceMappingURL=app.test.js.map