import { cp } from "fs";
import character from "./interface";
import enemy from "./interface";
const fs = require (`fs`);

export function displayPlayer(path:string) {
    const content = fs.readFileSync(path, 'utf-8');
    const jsonObject: character = JSON.parse(content);
    let player: character[] = [];
    const rarity = randomChoice();
    for (let i in jsonObject){
        if (rarity === jsonObject[i].rarity){
            player.push(jsonObject[i]);
        }
    }
    const random = Math.floor(Math.random() * player.length);
    player[random].mxHp = player[random].hp
    // console.log( player[random]);
    return player[random];
}

export function displayEnemies(path:string) {
    
        const content = fs.readFileSync(path, 'utf-8');
        const jsonObject: character = JSON.parse(content);
        let enemies: character[] = [];
        const rarity = randomChoice();
        for (let i in jsonObject){
            if (rarity === jsonObject[i].rarity){
                enemies.push(jsonObject[i]);
                
            }
        }
        const random = Math.floor(Math.random() * enemies.length);
        return enemies[random];

    }
    



export function displayBosses(path:string) {
    const content = fs.readFileSync(path, 'utf-8');
    const jsonObject: character = JSON.parse(content);
    let boss: character[] = [];
    const rarity = randomChoice();
    for (let i in jsonObject){
        if (rarity === jsonObject[i].rarity){
            boss.push(jsonObject[i]);
            
        }
    }
    const random = Math.floor(Math.random() * boss.length);
    return boss[random];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }    



function randomChoice(){
    let valeur;
    let random = getRandomInt(100);
    if (random >= 0 && random <= 50 ){
        valeur = 1;
    } else if (random > 50 && random <= 80){
        valeur = 2;
    } else if (random > 80 && random <= 95){
        valeur = 3;
    } else if (random > 95 && random <= 99){
        valeur = 4;
    } else if (random > 99 && random <= 100){
        valeur = 5;
    }
    return valeur;
}

