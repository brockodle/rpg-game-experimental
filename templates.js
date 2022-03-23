"use strict";

class player {
    constructor(name, exp, lvl) {
        this.name = name;
        this.str = makestat();
        this.dex = makestat();
        this.wis = makestat();
        this.int = makestat();
        this.cha = makestat();
        this.con = makestat();
        this.hp = 10+con;
        this.exp = exp;
        this.lvl = lvl;
    }
};

class monster {
    constructor(name, str, dex, wis, int, cha, con, hp, xpgain) {
        this.str = str;
        this.name = name;
        this.dex = dex;
        this.wis = wis;
        this.int = int;
        this.cha = cha;
        this.con = con;
        this.hp = hp;
        this.xpgain = xpgain;
    }
};

class magicobj {
    constructor(buff, stat, worth, xpgain) {
        this.buff = buff;
        this.stat = stat;
        this.worth = worth;
        this.xpgain = xpgain;
    }
};

function makestat(){
    console.log('making stats');
    const statinit = Math.round(Math.random()*20) > 8 === statinit;
    
    console.log(statinit);
}