const fs = require('fs');
const path = require('path');
const { constrainedMemory } = require('process');
const PriorityQueue = require('../priority_queue');
const { createImportSpecifier } = require('typescript');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

const input = fs.readFileSync(localPath).toString().split('\n');

const [n, S, W, G] = input.shift().split(' ').map(Number);

const goldenKeys = [];

for (let i = 0; i < G; i++) {
    const curr = input.shift().split(' ').map(Number);
    goldenKeys.push(curr);
}

const land = [];
land[0] = { type: 'start', price: 0 };
for (let i = 1; i < (n - 1) * 4; i++) {
    if (i === n - 1) {
        land.push({
            type: 'alone',
            price: 0,
        });
    } else if (i === 2 * n - 2) {
        land.push({
            type: 'social',
            price: 0,
        });
    } else if (i === 3 * n - 3) {
        land.push({
            type: 'space',
            price: 0,
        });
    } else if (i === 4 * n - 4) {
        land.push({ type: 'start', price: 0 });
    } else {
        const curr = input.shift().split(' ');
        const price = curr[0] == 'G' ? goldenKeys.shift() : curr[1];
        land.push({
            type: curr[0],
            price,
        });
    }
}

const allCommands = Number(input.shift());
const dices = [];
for (let i = 0; i < allCommands; i++) {
    const curr = input.shift().split(' ').map(Number);
    dices.push(curr);
}

class Player {
    constructor() {
        this.pos = 0;
        this.money = S;
        this.montlyPay = W;
    }
}

const totalRange = 4 * n - 4 - 1;
let socialMoney = 0;
function solution() {
    const player = new Player();

    let i = 1;
    while (dices.length) {
        const currDice = dices.shift();
        move(currDice);
        i += 1;
    }

    function move(dice) {
        const count = dice.reduce((acc, curr) => acc + curr);
        let nextPos = player.pos + count;
        if (nextPos > totalRange) {
            player.money += player.montlyPay;
            nextPos = (nextPos % totalRange) - 1;
        }
        player.pos = nextPos;
        return landAction();
    }

    function reducePlayerMoney(price) {
        player.money = player.money - price > 0 ? player.money - price : 0;
    }

    function landAction() {
        const currSpot = land[player.pos];
        const { type, price } = currSpot;

        if (type === 'L') {
            const buying = player.money - price;
            if (buying >= 0) {
                land[player.pos] = {
                    type: 'buy',
                    price: 0,
                };
                player.money -= price;
            }
        } else if (type === 'G') {
            return specialAction(price);
        } else if (type === 'alone') {
            return aloneAction();
        } else if (type === 'social') {
            player.money += socialMoney;
            socialMoney = 0;
            return;
        } else if (type === 'space') {
            player.pos = 0;
            return move(dices.shift());
        }
    }

    function specialAction(goldenKey) {
        const [key, price] = goldenKey;
        if (key === 1) {
            player.money += price;
            return;
        } else if (key === 2) {
            return reducePlayerMoney(price);
        } else if (key === 3) {
            socialMoney += price;
            return;
        } else if (key === 4) {
            let nextPos = player.pos + price;
            if (nextPos > totalRange) {
                nextPos = (nextPos % totalRange) - 1;
            }
            player.pos = nextPos;
            return landAction();
        }
    }

    function aloneAction() {
        for (let i = 0; i < 3; i++) {
            let currDice = dices.shift();
            if (currDice[0] === currDice[1]) {
                currDice = dices.shift();
                return move(currDice);
            }
        }
        return;
    }
}

solution();
