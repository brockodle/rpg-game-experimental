"use strict";

function getmod(tomod) {
    if (tomod = 30) {
        return 10;
    }
    if (tomod >= 28) {
        return 9;
    }
    if (tomod >= 26) {
        return 8;
    }
    if (tomod >= 24) {
        return 7
    }
    if (tomod >= 22) {
        return 6;
    }
    if (tomod >= 20) {
        return 5;
    }
    if (tomod >= 18) {
        return 4;
    }
    if (tomod >= 16) {
        return 3;
    }
    if (tomod >= 14) {
        return 2;
    }
    if (tomod >= 12) {
        return 1;
    }
    if (tomod >= 10) {
        return 0;
    }
    if (tomod >= 8) {
        return -1;
    }
    if (tomod >= 6) {
        return -2;
    }
    if (tomod >= 4) {
        return -3;
    }
    if (tomod >= 2) {
        return -4;
    }
    if (tomod >= 1) {
        return -5;
    }
};

function commitcharacter() {
    const currstats = document.getElementById("statrollers");
}

class player {
    constructor(name, exp, lvl) {
        this.name = name;
        this.str = makestat("str");
        this.strmod = getmod(this.str);
        this.dex = makestat("dex");
        this.dexmod = getmod(this.dex);
        this.wis = makestat("wis");
        this.wismod = getmod(this.wis);
        this.int = makestat("int");
        this.intmod = getmod(this.int);
        this.cha = makestat("cha");
        this.chamod = getmod(this.cha);
        this.con = makestat("con");
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

function makestat(stat) {
    console.log('making stats', stat);

    const inblock = document.getElementById(stat);

    console.log(inblock);

    const statcurr = Math.round(Math.random() * 18);
    const statisovermin = statcurr > 6;

    if (statisovermin) {
        inblock.value = statcurr;
        return statcurr;
    } else {
        console.log("FALSE D:");
        makestat(stat);
    }
};

let thisplayer = new player("Bobbalobba the Great", 0, 1);
console.log(thisplayer);