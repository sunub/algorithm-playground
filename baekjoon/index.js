const fs = require("fs");
const path = require("path");

const dir = process.cwd();
const inputPath = path.join(dir, "/baekjoon/example.txt");
const input = fs.readFileSync(inputPath).toString().trim().split("\n").map(str => str.trim());

const [N, M] = input.shift().split(' ').map(Number);
const field = [];

for(let i = 1; i <= N; i++) {
  field.push(input.shift().split(''));
}

const control = input.shift().split('');
const enemy = new Map();
const equipment = new Map();
for(let i = 0; i < input.length; i++) {
  const curr = input[i].split(' ');
  const [x, y] = [Number(curr[0]), Number(curr[1])];
  if(curr.length === 7) {
    const name = curr[2];
    const damage = Number(curr[3]);
    const defense = Number(curr[4]);
    const hp = Number(curr[5]);
    const exp = Number(curr[6]);

    enemy.set(`${x},${y}`, {
      name,
      damage,
      defense,
      hp,
      exp
    })
  } else {
    const type = curr[2];
    const attr = Number(curr[3]) ? Number(curr[3]) : curr[3];
    equipment.set(`${x},${y}`, {
      type,
      attr      
    });
  }
}

let killedByMsg = (str) => `YOU HAVE BEEN KILLED BY ${str}`

class Player {
  constructor() {
    this.hp = 20,
    this.maxHp = 20,
    this.damage = 2,
    this.defense = 2,
    this.level = 1;
    this.exp = 0;
    this.W = 0;
    this.A = 0;
    this.O = [];
    this.plusHp = false;
    this.resurrection = 0;
  }

  attack(damage, enemyDefense) {
    return Math.max(1, damage - enemyDefense);
  }

  healing(amount) {
    let totalAmount = this.hp + amount;
    if(totalAmount >= this.maxHp) this.hp = this.maxHp;
    this.hp = totalAmount;
  }

  fight(enemy) {
    let playerTurn = true;
    let { name, damage, defense, hp, exp} = enemy;
    let isBoss = name === 'Boss' ? true : false;
    let isHaveHU = this.O.includes('HU');
    let isHaveCO = this.O.includes('CO');
    let isHaveDX = this.O.includes('DX');

    while(this.hp > 0 && hp > 0) {
      let minus = 1;
      if(playerTurn) {
        if(isHaveCO && isHaveDX) {
          minus = this.attack((this.damage + this.W) * 3, defense);
          isHaveCO = false;
          isHaveDX = false;
        } else if(isHaveCO) {
          minus = this.attack((this.damage + this.W) * 2, defense);
          isHaveCO = false;
        } else {
          minus = this.attack(this.damage + this.W, defense);
        }
        hp -= minus;
        playerTurn = false;
      } else {
        if(isBoss && isHaveHU) {
          this.healing(Number.MAX_SAFE_INTEGER);
          isHaveHU = false;
        } else {
          minus = this.attack(damage, this.defense + this.A);
          this.hp -= minus;
          playerTurn = true;
        }
      }
    }

    let result = this.healthCheck();
    if(result === 'Revive') {
      return 'Revive';
    } else if(result === 'Die') {
      return killedByMsg(name);
    }

    this.levelUp(exp);
    if(this.plusHp) this.hp = this.hp + 3 <= this.maxHp ? this.hp + 3 : this.hp;
    if(isBoss) return 'YOU WIN!';
    return result;
  }

  getItem(equipment) {
    const { type, attr } = equipment;
    if(type === 'W') {
      this.W = attr;
      return
    };
    if(type === 'A') {
      this.A = attr;
      return
    }

    if(type === 'O' && this.O.length < 4) {
      switch (attr) {
        case 'RE':
          this.resurrection  += 1;
          break;
          case 'HR':
            this.plusHp = true;
            break;
        default:
          break;
      }

      if(!this.O.includes(attr)) {
        this.O.push(attr);
      }
    }
  }

  levelUp(exp) {
    let plusExp = exp;
    if(this.O.includes('EX')) {
      plusExp = Math.floor(plusExp * 1.2);
    }
    const totalExp = this.exp + plusExp;
    if(totalExp >= this.level * 5) {
      this.maxHp += 5;
      this.hp = this.maxHp;
      this.damage += 2;
      this.defense += 2;
      this.level += 1;
      this.exp = 0;
      return
    }

    this.exp = totalExp;
  }

  healthCheck() {
    const isAlive = this.hp > 0;
    if(!isAlive && this.resurrection > 0) return 'Revive';
    if(!isAlive) return 'Die';
    return 'Alive';
  }

  hurtBySpike() {
    let damage = 5;
    if(this.O.includes('DX')) damage = 1;
    this.hp -= damage;
    return this.healthCheck();
  }
};

function solution() {
  const player = new Player();
  const move = {
    L : [0, -1],
    R : [0, 1],
    U : [-1, 0],
    D : [1, 0]
  };

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
      if(field[i][j] === '@') {
        let result = startTheGame(i, j, [i, j]);
        console.log(result);
        return result;
      }
    }
  }

  function startTheGame(x, y, originStart) {
    if(control.length === 0) return 'Press any key to continue.';
    const command = control.shift();
    const nextMove = move[command];

    const [nx, ny] = [x + nextMove[0], y + nextMove[1]];
    if(nx < 0 || nx >= N || ny < 0 || ny >= M || field[nx][ny] === '#') {
      return startTheGame(x, y, originStart);
    }

    const nextSpot = field[nx][ny];


    let result = '';
    const key = `${nx + 1},${ny + 1}`;
    if(nextSpot === '^') {
      result = player.hurtBySpike();
      if(result === 'Revive') {
        player.hp = player.maxHp;
        player.resurrection -= 1;
        return startTheGame(originStart[0], originStart[1], originStart)
      };
      if(result == 'Die') return killedByMsg('SPIKE TRAP')
    } else if(nextSpot === 'B') {
      const currEuipment = equipment.get(key);
      player.getItem(currEuipment)
    } else if(nextSpot === '&' || nextSpot === 'M') {
      const currEnemy = enemy.get(key);
      result = player.fight(currEnemy);

      if(result === 'Revive') {
        player.hp = player.maxHp;
        player.resurrection -= 1;
        return startTheGame(originStart[0], originStart[1], originStart)
      };
      if(result !== 'Alive') return result;
    }

    if(nextSpot !== '^') {
      field[nx][ny] = '@';
    }
    field[x][y] = '.';
    return startTheGame(nx, ny, originStart);
  }
}

solution();