const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {});

rl.question('', (input) => {});

const [N, M] = input.trim().split(' ').map(Number);
n = N;
m = M;

const map = [];
let starty = 0,
    startx = 0;

rl.on('line', (line) => {
    if (map.length < n) {
        const row = [];
        for (let i = 0; i < m; i++) {
            row.push(line[i]);
            if (line[i] === '@') {
                starty = map.length;
                startx = i;
                row[i] = '.';
            }
        }
        map.push(row);
    } else {
        const move = line.trim();
        const monsterMap = new Array(n + 1)
            .fill(null)
            .map(() => new Array(m + 1).fill(0));
        const itemMap = new Array(n + 1)
            .fill(null)
            .map(() => new Array(m + 1).fill(0));

        const monsters = [];
        const items = [];

        let idx = 1;

        for (const nextLine of rl) {
            const info = nextLine.trim().split(' ');
            const size = info.length;
            if (size === 7) {
                const [y, x, name, att, def, hp, exp] = info.map(Number);
                monsterMap[y][x] = idx;
                monsters.push([name, att, def, hp, exp]);
            } else if (size === 4) {
                const [y, x, name, desc] = info;
                itemMap[y][x] = idx;
                items.push([name, desc]);
            } else {
                break;
            }
            idx++;
        }

        let posy = starty;
        let posx = startx;
        let hp = 20;
        let maxhp = 20;
        let attack_point = 2;
        let defence_point = 2;
        let add_attack_pointby_W = 0;
        let add_defence_pointby_A = 0;
        let need_exp = 5;
        let level = 1;
        let now_exp = 0;
        let clearBoss = false;
        let die = false;
        const item = [];
        let i = 0;

        for (i = 0; i < move.length; i++) {
            const mover = move[i];
            let nposy, nposx;
            switch (mover) {
                case 'R':
                    nposy = posy;
                    nposx = posx + 1;
                    break;
                case 'L':
                    nposy = posy;
                    nposx = posx - 1;
                    break;
                case 'D':
                    nposy = posy + 1;
                    nposx = posx;
                    break;
                case 'U':
                    nposy = posy - 1;
                    nposx = posx;
                    break;
                default:
                    nposy = posy;
                    nposx = posx;
            }

            if (OutRange(nposy, nposx) || map[nposy][nposx] === '#') {
                nposy = posy;
                nposx = posx;
            }

            posy = nposy;
            posx = nposx;

            if (map[posy][posx] === '.') {
                continue;
            } else if (map[posy][posx] === '^') {
                if (item.includes('DX')) {
                    hp -= 1;
                } else {
                    hp -= 5;
                }
                if (hp <= 0) {
                    if (item.includes('RE')) {
                        posy = starty;
                        posx = startx;
                        hp = maxhp;
                        item.splice(item.indexOf('RE'), 1);
                        continue;
                    }
                    i++;
                    hp = 0;
                    die = true;
                    dyingMessage = 'SPIKE TRAP';
                    break;
                }
            } else if (map[posy][posx] === 'B') {
                const index = itemMap[posy][posx] - 1;
                const [itemName, itemDesc] = items[index];
                if (itemName === 'W') {
                    add_attack_pointby_W = parseInt(itemDesc);
                } else if (itemName === 'A') {
                    add_defence_pointby_A = parseInt(itemDesc);
                } else if (itemName === 'O') {
                    if (item.length < 4 && !item.includes(itemDesc)) {
                        item.push(itemDesc);
                    }
                }
                map[posy][posx] = '.';
            } else if (map[posy][posx] === '&' || map[posy][posx] === 'M') {
                const monsterindex = monsterMap[posy][posx] - 1;
                const [
                    monsterName,
                    monsterAtt,
                    monsterDef,
                    monsterHp,
                    monsterExp,
                ] = monsters[monsterindex];
                for (let step = 1; ; step++) {
                    let mul = 1;
                    if (step === 1 && item.includes('CO')) {
                        mul = 2;
                        if (item.includes('DX')) {
                            mul = 3;
                        }
                    }
                    let userdemage =
                        (attack_point + add_attack_pointby_W) * mul -
                        monsterDef;
                    if (userdemage <= 1) userdemage = 1;
                    monsterHp -= userdemage;
                    if (monsterHp <= 0) {
                        if (item.includes('EX')) {
                            monsterExp *= 1.2;
                        }
                        now_exp += monsterExp;
                        if (now_exp >= need_exp) {
                            now_exp = 0;
                            level++;
                            need_exp += 5;
                            maxhp += 5;
                            defence_point += 2;
                            attack_point += 2;
                            hp = maxhp;
                        }
                        if (item.includes('HR')) {
                            hp = hp + 3 > maxhp ? maxhp : hp + 3;
                        }
                        if (map[posy][posx] === 'M') {
                            map[posy][posx] = '@';
                            clearBoss = true;
                            i++;
                            break;
                        }
                        map[posy][posx] = '.';
                        break;
                    }

                    let mondemage =
                        monsterAtt - (defence_point + add_defence_pointby_A);
                    if (mondemage <= 1) mondemage = 1;
                    if (
                        map[posy][posx] === 'M' &&
                        item.includes('HU') &&
                        step === 1
                    ) {
                        hp = maxhp;
                        mondemage = 0;
                    }
                    hp -= mondemage;
                    if (hp <= 0) {
                        if (item.includes('RE')) {
                            hp = maxhp;
                            item.splice(item.indexOf('RE'), 1);
                            posx = startx;
                            posy = starty;
                            break;
                        } else {
                            hp = 0;
                            dyingMessage = monsterName;
                            i++;
                            die = true;
                            break;
                        }
                    }
                }
            }
        }

        if (i === move.length && !clearBoss && !die) {
            map[posy][posx] = '@';
        }

        let output = '';
        for (let k = 0; k < n; k++) {
            for (let j = 0; j < m; j++) {
                output += map[k][j];
            }
            output += '\n';
        }

        output += `Passed Turns : ${i}\n`;
        output += `LV : ${level}\n`;
        output += `HP : ${hp}/${maxhp}\n`;
        output += `ATT : ${attack_point}+${add_attack_pointby_W}\n`;
        output += `DEF : ${defence_point}+${add_defence_pointby_A}\n`;
        output += `EXP : ${now_exp}/${need_exp}\n`;
        if (!die) {
            if (clearBoss) {
                output += 'YOU WIN!\n';
            } else {
                output += 'Press any key to continue.\n';
            }
        } else {
            output += `YOU HAVE BEEN KILLED BY ${dyingMessage}..\n`;
        }
        console.log(output);
        rl.close();
    }
});

function OutRange(nposy, nposx) {
    return !(nposy > 0 && nposx > 0 && nposy <= n && nposx <= m);
}
