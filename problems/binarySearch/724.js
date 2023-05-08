function pivotIndex(inputData) {
  for (let i = 0; i < inputData.length; i++) {
    const left =
      i - 1 >= 0
        ? inputData.slice(0, i).reduce((prev, curv) => prev + curv)
        : 0;
    const right =
      i + 1 < inputData.length
        ? inputData
            .slice(i + 1, inputData.length)
            .reduce((prev, curv) => prev + curv)
        : 0;

    if (left === right) {
      return i;
    }
  }

  return -1;
}
