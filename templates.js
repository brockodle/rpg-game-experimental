(function(){
    function player(name, str, dex, wis, int, cha, con, hp, exp, lvl){
        this.name = name;
        this.str = str;
        this.dex = dex;
        this.wis = wis;
        this.int = int;
        this.cha = cha;
        this.con = con;
        this.hp = hp;
        this.exp = exp;
        this.lvl = lvl;
    }

    function monster(name, str, dex, wis, int, cha, con, hp, xpgain){
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

    function magicobj(buff, stat, worth, xpgain){
        this.buff = buff;
        this.stat = stat;
        this.worth = worth;
        this.xpgain = xpgain;
    }
}())