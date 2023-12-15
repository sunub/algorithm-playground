function partition(n: number) {
    let number = n + 1
    const partitonMatrix = Array(number).fill(Array(number).fill(0))

    for (let summandIndex = 0; summandIndex < number; summandIndex++) {
        partitonMatrix[summandIndex][0] = 1
    }

    for (let summandIndex = 1; summandIndex < number; summandIndex++) {
        for (let numberIndex = 1; numberIndex < number; numberIndex++) {
            if (summandIndex > numberIndex) {
                partitonMatrix[summandIndex][numberIndex] =
                    partitonMatrix[summandIndex - 1][numberIndex]
            } else {
                let combosWithoutSummand =
                    partitonMatrix[summandIndex - 1][numberIndex]
                let combosWidthSummand =
                    partitonMatrix[summandIndex][numberIndex - summandIndex]

                partitonMatrix[summandIndex][numberIndex] =
                    combosWidthSummand + combosWithoutSummand
            }
        }
    }
    number = number - 1
}
