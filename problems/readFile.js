import fs from "fs"

const text = fs.readFileSync("./example.md", "utf-8")
const pattern = /---\n([\s\S]*?)\n---/
const match = text.match(pattern)

if (match) {
    const extractedText = match[1]

    const lines = extractedText.split("\n")
    const obj = {}

    for (const line of lines) {
        const [key, value] = line.split(":").map((text) => text.trim())
        obj[key] = value
    }
}

// const remainingText = text.split("---").slice(2).join()
// console.log(remainingText)
