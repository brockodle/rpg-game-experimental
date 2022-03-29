"use strict";

(function() {
    const btnparent = document.getElementById('statrollers');
    const rerollbtns = btnparent.getElementsByTagName('button');
    const commitbtn = document.getElementById('applycharacter');

    for (let b of rerollbtns) {
        b.addEventListener('click', function() {
            const randn = Math.round(Math.random() * 18);
            const id = this.id.slice(9);
            makestat(randn, id);
            chgdiv(id);
            acquireclass();
        })
    }

    commitbtn.addEventListener('click', function() {
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
    acquireclass();
}())

function classdistro(topskills) {
    console.log(topskills);
    const v1 = Object.keys(topskills[0]);
    const v2 = Object.keys(topskills[1]);

    console.log(v1[0], v2[0]);
    const classdiv = document.getElementById('classpick');

    if (v1[0] === 'str' && v2[0] === 'con') {
        classdiv.innerHTML = `Barbarian!`;
    } else if (v1[0] === 'dex' && v2[0] === 'wis') {
        classdiv.innerHTML = `Monk!`;
    } else {
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
        console.log(orderedv);

        const arrout = [];

        for (let s of skillar) {

            if (Number(Object.values(s)) === orderedv[0] || Number(Object.values(s)) === orderedv[1]) {
                arrout.push(s);
                if (arrout.length === 2) {
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