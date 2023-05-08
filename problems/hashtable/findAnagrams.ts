function findAnagrams(s: string, p: string) {
    const target: any = {}
    for (let i = 0; i < p.length; i++) {
        target[p[i]] = target[p[i]] ? target[p[i]] + 1 : 1
    }
    let answer: number[] = []
    let ptr1: number = 0
    while (ptr1 <= s.length - p.length) {
        let isSame: boolean[] = []
        let visited: any = {}
        for (let i = ptr1; i < ptr1 + p.length; i++) {
            visited[s[i]] = visited[s[i]] ? visited[s[i]] + 1 : 1
        }
        for (const key in visited) {
            target[key] && target[key] === visited[key]
                ? isSame.push(true)
                : isSame.push(false)
        }
        if (!isSame.includes(false)) {
            answer.push(ptr1)
        }
        ptr1++
    }
    return answer
}
