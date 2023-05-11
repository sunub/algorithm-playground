enum DIRECTION {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    UP = "UP",
    DOWN = "DOWN",
}

const generateMatrix = (n: number): number[][] => {
    if (n === 1) return [[1]]

    const board = Array.from(new Array(n), () => Array(n).fill(-1))

    const nextDir = new Map([
        [DIRECTION.LEFT, DIRECTION.UP],
        [DIRECTION.UP, DIRECTION.RIGHT],
        [DIRECTION.RIGHT, DIRECTION.DOWN],
        [DIRECTION.DOWN, DIRECTION.LEFT],
    ])

    const nextRC = (r: number, c: number, dir: DIRECTION) => {
        switch (dir) {
            case DIRECTION.LEFT:
                return [r, c - 1]
            case DIRECTION.RIGHT:
                return [r, c + 1]
            case DIRECTION.UP:
                return [r - 1, c]
            case DIRECTION.DOWN:
                return [r + 1, c]
            default:
                return [r, c]
        }
    }

    const isEmpty = (r: number, c: number) =>
        r >= 0 && r < n && c >= 0 && c < n && board[r][c] === -1

    const size = n * n

    let r = 0,
        c = 0,
        dir = DIRECTION.RIGHT
    for (let i = 1; i <= size; i++) {
        board[r][c] = i
        let [nextR, nextC] = nextRC(r, c, dir)

        if (!isEmpty(nextR, nextC)) {
            dir = nextDir.get(dir)
            ;[nextR, nextC] = nextRC(r, c, dir)
        }

        ;[r, c] = [nextR, nextC]
    }

    return board
}
generateMatrix(3)
