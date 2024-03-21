function solution(edges) {
    const graphInfo = new Map();
    const graph = new Map();
    for (const [u, v] of edges) {
        graphInfo.has(u)
            ? graphInfo.set(u, {
                  recieve: graphInfo.get(u).recieve,
                  send: graphInfo.get(u).send + 1,
              })
            : graphInfo.set(u, { recieve: 0, send: 1 });
        graphInfo.has(v)
            ? graphInfo.set(v, {
                  recieve: graphInfo.get(v).recieve + 1,
                  send: graphInfo.get(v).send,
              })
            : graphInfo.set(v, { recieve: 1, send: 0 });

        if (!graph.has(u)) graph.set(u, []);
        graph.get(u).push(v);
    }

    let createdRoot = 0;
    let stick = 0;
    let eightShape = 0;

    for (const [root, info] of [...graphInfo.entries()]) {
        if (info.recieve === 0 && info.send >= 2) {
            createdRoot = root;
        }
        if (info.send === 0) {
            stick += 1;
        }
        if (info.send === 2 && info.recieve >= 2) {
            eightShape += 1;
        }
    }
    let donut = graph.get(createdRoot).length - stick - eightShape;

    return [createdRoot, donut, stick, eightShape];
}
