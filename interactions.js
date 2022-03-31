"use strict";

(function () {
    const btnparent = document.getElementById('statrollers');
    const rerollbtns = btnparent.getElementsByTagName('button');
    const commitbtn = document.getElementById('applycharacter');
    let rerollct = 3;
    const rerolldiv = document.getElementById('reroll');
    rerolldiv.innerHTML = `REROLLS: ${rerollct}`;

    commitbtn.addEventListener('click', function () {
        const currstats = document.getElementsByClassName("instat");
        const statcollect = document.getElementById("statrollers");
        const rerollbtns = statcollect.getElementsByTagName("button");

        for (let stat of currstats) {
            stat.disabled = true;

            $(stat).css({
                'width': '98%',
                'font-weight': 'bold',
                'font-size': '24px'
            });
        }

        for (let sl of rerollbtns) {
            $(sl).hide(200).off();
        }
    });

    for (let b of rerollbtns) {
        b.addEventListener('click', function () {
            if (rerollct === 0) {
                commitbtn.click();
                return;
            }
            else {
                rerollct--;
                rerolldiv.innerHTML = `REROLLS: ${rerollct}`;
                const randn = Math.round(Math.random() * 18);
                const id = this.id.slice(9);
                makestat(randn, id);
                chgdiv(id);
                acquireclass();
                if (rerollct === 0){
                    $(rerollbtns).text('Commit Stats');
                }
            }
        })
    }

    acquireclass();
}())

function classdistro(topskills) {
    console.log(topskills);
    let v1 = topskills[0];
    let v2 = topskills[1];

    console.log(v1, v2);
    const getkeys = function (from) {
        return Object.keys(from);
    };
    const classdiv = document.getElementById('classpick');
    let consolestatement = function (i1, i2, classc) {
        return `${i1} and ${i2} make for a good ${classc}`;
    }

    if (getkeys(v1) == 'str' && getkeys(v2) == 'con') {
        const classchoice = 'Barbarian';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'str' && getkeys(v2) == 'cha') {
        const classchoice = 'Paladin'
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'str' && getkeys(v2) == 'dex') {
        const classchoice = 'Fighter';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'dex' && getkeys(v2) == 'wis') {
        const classchoice = 'Monk or Ranger';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'dex' && getkeys(v2) == 'int') {
        const classchoice = 'Rogue, Wizard or Artificer';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'dex' && getkeys(v2) == 'cha') {
        const classchoice = 'Bard';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'con' && getkeys(v2) == 'cha') {
        const classchoice = 'Sorcerer or Warlock';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'con' && getkeys(v2) == 'int') {
        const classchoice = 'Wizard or Artificer';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'str' && getkeys(v2) == 'wis') {
        const classchoice = 'Cleric';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    if (getkeys(v1) == 'con' && getkeys(v2) == 'wis') {
        const classchoice = 'Druid';
        console.log(consolestatement(getkeys(v1), getkeys(v2), classchoice));
        classdiv.innerHTML = `The <span style="color:red;font-size:28px;">${classchoice.toString()}</span> class!`
    }
    else {
        return;
    }
}

function acquireclass() {
    const t = thisplayer;
    const skillar = [{ str: t.str }, { dex: t.dex }, { con: t.con }, { int: t.int }, { wis: t.wis }, { cha: t.cha }];
    const arrv = [];

    for (let v in skillar) {
        const n = Number(Object.values(skillar[v]));
        arrv.push(n);

        const orderedv = arrv.sort((a, b) => a - b).reverse().slice(0, 2);
        const arrout = [];

        for (let s of skillar) {

            if (Number(Object.values(s)) === orderedv[0] || Number(Object.values(s)) === orderedv[1]) {
                arrout.push(s);
                if (arrout.length === 2) {
                    console.log(arrout);
                    classdistro(arrout);
                }
            }
        }
    }

    //[t.str, t.dex, t.con, t.int, t.wis, t.cha]
    //[{str:t.str}, {dex:t.dex}, {con:t.con}, {int:t.int}, {wis:t.wis}, {cha:t.cha}]
    //const skillar = [{ str: t.str }, { dex: t.dex }, { con: t.con }, { int: t.int }, { wis: t.wis }, { cha: t.cha }];

    //  for (let u of skillar) {
    //    let v = Object.values(u);
    //    console.log(v);
    //  }

    //const reversed = skillar.sort((a, b) => a - b).reverse();
    //console.log(reversed.slice(0, 2));
};