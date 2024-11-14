"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomIntInclusive = void 0;
function expe(player, exp, level) {
    exp += getRandomIntInclusive(15, 50);
    if (exp >= 100) {
        level++;
        console.log(" Level up ! You're level", level, "!\n");
        exp = exp - 100;
        exp = 0;
        var i = getRandomIntInclusive(0, 1);
        if (i === 0) {
            var n = getRandomIntInclusive(1, 5);
            player.str = player.str + n;
            console.log("You gained " + n + " str !");
        }
        else {
            var u = getRandomIntInclusive(1, 5);
            player.hp = player.hp + u;
            player.mxHp += u;
            console.log("You gained " + u + " hp !");
        }
    }
    return {
        "level": level,
        "exp": exp
    };
}
exports.default = expe;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomIntInclusive = getRandomIntInclusive;
