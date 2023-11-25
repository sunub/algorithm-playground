function solution(friends, gifts) {
    const n = friends.length;
    const counts = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => 0)
    );

    const givenAndSend = Array.from({ length: n }, () =>
        Array.from({ length: 3 }, () => 0)
    );

    const map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(friends[i], i);
        map.set(i, friends[i]);
    }

    for (const gift of gifts) {
        const [from, to] = gift.split(" ");

        const fromPerson = map.get(from);
        const toPerson = map.get(to);

        givenAndSend[fromPerson][0] = givenAndSend[fromPerson][0] + 1;
        givenAndSend[toPerson][1] = givenAndSend[toPerson][1] + 1;

        counts[fromPerson][toPerson] = counts[fromPerson][toPerson] + 1;
    }

    let answer = -Infinity;
    for (let i = 0; i < n; i++) {
        let nextGivenCount = 0;
        for (let j = 0; j < n; j++) {
            if (counts[i][j] === counts[j][i]) {
                if (i !== j && givenAndSend[i][2] > givenAndSend[j][2]) {
                    nextGivenCount += 1;
                }
            } else if (i !== j && counts[i][j] === 0 && counts[j][i] === 0) {
                if (givenAndSend[i][2] > givenAndSend[j][2]) {
                    nextGivenCount += 1;
                }
            } else if (i !== j && counts[i][j] > counts[j][i]) {
                nextGivenCount += 1;
            }
        }
        answer = Math.max(nextGivenCount, answer);
    }
    return answer;
}
