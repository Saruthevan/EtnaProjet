"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var rl = require("readline-sync");
var getInput = function (question) { return rl.question("".concat(question, "\n")); };
var random_1 = require("./random");
var random_2 = require("./random");
console.log("start the game");
var content_players = fs.readFileSync('../jsonFolder/players.json', 'utf-8');
var tab_character = JSON.parse(content_players);
var content_opponent = fs.readFileSync('../jsonFolder/enemies.json', 'utf-8');
var tab_opponent = JSON.parse(content_opponent);
game(tab_character, tab_opponent);
function display(playerD_hp, playerD_max) {
    //saut de lignes entre console.log
    //affichage barre des stats de chaque combattant
    //affichage couleurs
    var life = [];
    var i = 0;
    for (; i < playerD_hp; i++) {
        life[i] = "I";
    }
    //    console.log(life.join(''));
    for (var j = i; j < playerD_max; j++) {
        life[j] = "_";
    }
    console.log(life.join(''), playerD_hp, "/", playerD_max);
}
function combat(player, enemy, initial_player_max, initial_opponent_max) {
    while (player.hp > 0 && enemy.hp > 0) //tant que les deux joeurs ne sont pas battus la boucle continue
     {
        try {
            console.log("\u001B[31m ".concat(player.name, ":\u001B[39m ").concat(player.hp));
            display(player.hp, initial_player_max);
            console.log("\u001B[92m ".concat(enemy.name, " :\u001B[39m ").concat(enemy.hp));
            display(enemy.hp, initial_opponent_max);
            console.log("-----------Options-----------");
            var choice_attack = getInput("1. Attack         2. Heal");
            if (choice_attack === "1") {
                enemy.hp = enemy.hp - player.str;
                if (enemy.hp < 0) {
                    enemy.hp = 0;
                }
                // console.log(`The enemy's hp is going down !`);
                console.log("You attacked and dealt\" ".concat(player.str, " \"damages!"));
            }
            else if (choice_attack === "2") {
                player.hp = heal(player, initial_player_max);
            }
            else {
                return 0;
            }
            //rajouter une condition : si jms on choisi un autre numéro, reposer la qst
            console.log("It's the enemy's turn to attack !");
            player.hp = player.hp - enemy.str;
            console.log("".concat(enemy.name, " attacked and dealt ").concat(enemy.str, " damages!"));
        }
        catch (error) {
            console.error("wrong use of the program");
        }
    }
    return player.hp;
}
/*
function heal(hero_hp: number, hero_hp_max: number){

    hero_hp = hero_hp + (hero_hp_max/2); //ajout limiteur si hp >30 heal la diff

}
*/
function game(character, opponent) {
    var initial_player = (0, random_1.displayPlayer)("../jsonFolder/players.json"); //fonction getRndomPlayer
    var initial_opponent = (0, random_2.displayEnemies)("../jsonFolder/enemies.json"); //fonction getRndomEnemy
    var boss = (0, random_1.displayBosses)("../jsonFolder/bosses.json");
    var floors = 1;
    var initial_player_max = initial_player.hp;
    var initial_opponent_max = initial_opponent.hp;
    while (floors <= 10) {
        console.log("========== FIGHT ".concat(floors, " =========="));
        console.log("Un nouveau monstre est appar\u00FBt avec ".concat(initial_opponent.hp, " hp"));
        //appel de la fonction
        // initial player hp = player_hp à chaque combat; 
        if (floors === 10) {
            initial_opponent = (0, random_1.displayBosses)("../jsonFolder/bosses.json");
        }
        initial_player.hp = combat(initial_player, initial_opponent, initial_player_max, initial_opponent_max);
        //vérifier qui est la cause de la fin du combat
        //si opponent=defeated  => floors++
        if (floors === 10 && initial_opponent.hp <= 0) {
            console.log("You win !");
            break;
            // ou demander si le joueur veut refaire une partie        
        }
        else if (initial_player.hp <= 0) {
            //si player=defeated => game_over, break
            console.log("Game Over");
            break;
        }
        floors++;
        //initial_opponent = //fonction getRndomEnemy
        //initial_opponent_max = initial_opponent.hp;
        initial_opponent = (0, random_2.displayEnemies)("../jsonFolder/enemies.json");
        initial_opponent.hp = initial_opponent_max; // SUpp après random
        //console.log(`Un nouveau monstre est apparût avec ${initial_opponent.hp}`);
    }
}
function heal(fighter, fighter_max) {
    fighter.hp += (fighter_max / 2);
    fighter.hp = Math.floor(fighter.hp);
    if (fighter.hp > fighter_max) {
        fighter.hp = fighter_max;
    }
    return fighter.hp;
}
