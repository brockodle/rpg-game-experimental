"use strict";

(function() {
    const btnparent = document.getElementById('statrollers');
    const rerollbtns = btnparent.getElementsByTagName('button');
    const commitbtn = document.getElementById('applycharacter');

    for (let b of rerollbtns) {
        b.addEventListener('click', function() {
            console.log(this.id);
            makestat(Math.round(Math.round(Math.random() * 18)), this.id.slice(9));
            chgdiv(this.id.slice(9));
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

function acquireclass() {
    const t = thisplayer;
    //[t.str, t.dex, t.con, t.int, t.wis, t.cha]
    //[{str:t.str}, {dex:t.dex}, {con:t.con}, {int:t.int}, {wis:t.wis}, {cha:t.cha}]
    const skillar = [{ str: t.str }, { dex: t.dex }, { con: t.con }, { int: t.int }, { wis: t.wis }, { cha: t.cha }];

    for (let u of skillar) {
        let v = Object.values(u);
        console.log(v);
    }

    const reversed = skillar.sort((a, b) => a - b).reverse();
    //console.log(reversed.slice(0, 2));
};