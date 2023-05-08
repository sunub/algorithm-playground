import type { Config } from "jest"

const config: Config = {
    preset: "ts-jest",
    verbose: true,
    clearMocks: true,
    testEnvironment: "node",
    testMatch: ["**/?(*)+(test).ts"],
    globals: {
        "ts-jest": {
            tsconfig: {
                rootDir: ".",
            },
        },
    },
}

export default config
