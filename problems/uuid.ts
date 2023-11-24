import { v4 as uuidv4 } from "uuid"

function shuffle(array) {
    let currentIndex = array.length
    let randomIndex
    const newArray = Array.from(array)

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        let _ref = [newArray[randomIndex], newArray[currentIndex]]
        newArray[currentIndex] = _ref[0]
        newArray[randomIndex] = _ref[1]
    }

    return newArray
}

const SVG_HTMLS = [
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="1"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="2"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="9"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="blank">></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="4"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="0"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="5"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="3"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="8"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="6"></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" data-testid="shuffle"></svg>',
    '<svg width="20" height="28" viewBox="0 0 20 28" data-testid="7">/svg>',
]

const shuffledSVG = shuffle(SVG_HTMLS)

const a = [
    shuffledSVG.slice(0, 4),
    shuffledSVG.slice(4, 8),
    shuffledSVG.slice(8, 12),
]
console.log(a)
