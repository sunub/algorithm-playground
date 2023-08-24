import lodash from "lodash"

var fullJustify = function (words: string[], maxWidth: number) {
    const n = words.length
    const fullJustified: string[][] = []
    const answer: string[] = []

    let lineJustify: string[] = []
    let lineWidth = 0

    for (let i = 0; i < n; i++) {
        lineJustify.push(words[i])
        lineWidth += words[i].length

        if (lineWidth === maxWidth) {
            fullJustified.push([...lineJustify, `${lineWidth}`])
            ;[lineJustify, lineWidth] = [[], 0]
        } else if (lineWidth > maxWidth) {
            const exceed = lineJustify.pop()!
            fullJustified.push([...lineJustify, `${lineWidth - exceed.length}`])
            ;[lineJustify, lineWidth] = [[exceed], exceed.length]
        }

        if (i === n - 1) {
            fullJustified.push([...lineJustify, `${lineWidth}`])
        }
    }

    for (let i = 1; i < fullJustified.length; i++) {
        let longestLength = +fullJustified[i - 1].pop()!
        const currLength = +fullJustified[i].pop()!

        const word = fullJustified[i - 1].pop()!
        if (currLength + word.length <= maxWidth) {
            fullJustified[i].unshift(word)
            longestLength -= word.length
            fullJustified[i].push(`${currLength + word.length}`)
        } else {
            fullJustified[i - 1].unshift(word)
            fullJustified[i].push(`${currLength}`)
        }
    }

    for(let i = 0; i < fullJustified.length; i++) {
        let remainLength = maxWidth;

        for(let j = 0; j < fullJustified[i].length; j++) {}
    }
}

function fillJustifyWords(
    words: string[],
    remainSpace: number,
    maxWidth: number
) {
    let line = ""

    for (let i = 0; i < words.length; i++) {
        line += words[i]

        if (i !== words.length - 1) {
            let j = 0
            while (j < remainSpace) {
                line += " "
                j += 1
            }
        }
    }

    return line.length < maxWidth ? (line += " ") : line
}
console.log(
    fullJustify(
        ["This", "is", "an", "example", "of", "text", "justification."],
        16
    )
)
