"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayBosses = exports.displayEnemies = exports.displayPlayer = void 0;
var fs = require("fs");
function displayPlayer(path) {
    var content = fs.readFileSync(path, 'utf-8');
    var jsonObject = JSON.parse(content);
    var player = [];
    var rarity = randomChoice();
    for (var i in jsonObject) {
        if (rarity === jsonObject[i].rarity) {
            player.push(jsonObject[i]);
        }
    }
    var random = Math.floor(Math.random() * player.length);
    player[random].mxHp = player[random].hp;
    // console.log( player[random]);
    return player[random];
}
exports.displayPlayer = displayPlayer;
function displayEnemies(path) {
    var content = fs.readFileSync(path, 'utf-8');
    var jsonObject = JSON.parse(content);
    var enemies = [];
    var rarity = randomChoice();
    for (var i in jsonObject) {
        if (rarity === jsonObject[i].rarity) {
            enemies.push(jsonObject[i]);
        }
    }
    var random = Math.floor(Math.random() * enemies.length);
    return enemies[random];
}
exports.displayEnemies = displayEnemies;
function displayBosses(path) {
    var content = fs.readFileSync(path, 'utf-8');
    var jsonObject = JSON.parse(content);
    var boss = [];
    var rarity = randomChoice();
    for (var i in jsonObject) {
        if (rarity === jsonObject[i].rarity) {
            boss.push(jsonObject[i]);
        }
    }
    var random = Math.floor(Math.random() * boss.length);
    return boss[random];
}
exports.displayBosses = displayBosses;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function randomChoice() {
    var valeur;
    var random = getRandomInt(100);
    if (random >= 0 && random <= 50) {
        valeur = 1;
    }
    else if (random > 50 && random <= 80) {
        valeur = 2;
    }
    else if (random > 80 && random <= 95) {
        valeur = 3;
    }
    else if (random > 95 && random <= 99) {
        valeur = 4;
    }
    else if (random > 99 && random <= 100) {
        valeur = 5;
    }
    return valeur;
}
