"use strict";


function getmod(tomod) {

    let outmod;
    if (tomod < 30) {
        outmod = 10;
    }
    if (tomod < 29) {
        outmod = 9;
    }
    if (tomod < 27) {
        outmod = 8;
    }
    if (tomod < 25) {
        outmod = 7
    }
    if (tomod < 23) {
        outmod = 6;
    }
    if (tomod < 21) {
        outmod = 5;
    }
    if (tomod < 19) {
        outmod = 4;
    }
    if (tomod < 17) {
        outmod = 3;
    }
    if (tomod < 15) {
        outmod = 2;
    }
    if (tomod < 13) {
        outmod = 1;
    }
    if (tomod < 11) {
        outmod = 0;
    }
    if (tomod < 9) {
        outmod = -1;
    }
    if (tomod < 7) {
        outmod = -2;
    }
    if (tomod < 5) {
        outmod = -3;
    }
    if (tomod < 3) {
        outmod = -4;
    }
    if (tomod < 1) {
        outmod = -6;
    }
    return outmod;
};

function commitcharacter() {
    const currstats = document.getElementById("statrollers");
}

class player {
    constructor(name, exp, lvl) {
        this.name = name;
        this.str = makestat(Math.round(Math.random() * 18), "str");
        this.strmod = getmod(this.str);
        this.dex = makestat(Math.round(Math.random() * 18), "dex");
        this.dexmod = getmod(this.dex);
        this.wis = makestat(Math.round(Math.random() * 18), "wis");
        this.wismod = getmod(this.wis);
        this.int = makestat(Math.round(Math.random() * 18), "int");
        this.intmod = getmod(this.int);
        this.cha = makestat(Math.round(Math.random() * 18), "cha");
        this.chamod = getmod(this.cha);
        this.con = makestat(Math.round(Math.random() * 18), "con");
        this.conmod = getmod(this.con);
        this.exp = exp;
        this.lvl = lvl;
        /*this.class = {
            addskill1,
            addskill2,
            hpmod
        };
        this.hp = this.class.hpmod + conmod; */
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

function makestat(innum, stat) {

    console.log(innum, stat);

    const statisovermin = innum >= 6;
    const statref = document.getElementById(stat);

    if (statisovermin) {
        statref.value = innum;
        return innum;
    }
    else {
        console.log("failed, restart function");
        return makestat(Math.round(Math.random() * 18), stat);
    }
};

let thisplayer = new player("Bobbalobba the Great", 0, 1);
console.log(thisplayer);