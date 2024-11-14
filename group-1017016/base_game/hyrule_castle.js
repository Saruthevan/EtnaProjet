"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var rl = require("readline-sync");
var getInput = function (question) { return rl.question("".concat(question, "\n")); };
var random_1 = require("./random");
var random_2 = require("./random");
var level_and_experience_1 = require("../mods/level_and_experience");
var content_players = fs.readFileSync('../jsonFolder/players.json', 'utf-8');
var tab_character = JSON.parse(content_players);
var content_opponent = fs.readFileSync('../jsonFolder/enemies.json', 'utf-8'); // permet de recuperer et traduire le json 
var tab_opponent = JSON.parse(content_opponent);
game(tab_character, tab_opponent);
function displayLife(playerD_hp, playerD_max) {
    var life = [];
    var i = 0;
    for (; i < playerD_hp; i++) {
        life[i] = "I";
    }
    for (var j = i; j < playerD_max; j++) {
        life[j] = "_";
    }
    console.log(life.join(''), playerD_hp, "/", playerD_max);
}
function combat(player, enemy, initial_player_max, initial_opponent_max) {
    while (player.hp > 0 && enemy.hp > 0) //tant que les deux joeurs ne sont pas battus la boucle continue
     {
        console.log("\n\u001B[31m ".concat(enemy.name, ":\u001B[39m ").concat(enemy.hp));
        displayLife(enemy.hp, initial_opponent_max);
        console.log("\n\u001B[92m ".concat(player.name, " :\u001B[39m ").concat(player.hp));
        displayLife(player.hp, player.mxHp);
        console.log("\n-----------Options-----------");
        var choice_attack = getInput("1. Attack       2. Heal"); //choix entre attaquer et se soigner
        if (choice_attack === "1") {
            enemy.hp = enemy.hp - player.str;
            if (enemy.hp < 0) {
                enemy.hp = 0;
            }
            else if (enemy.hp > 0 && player.hp > 0) {
                console.log("You attacked and dealt ".concat(player.str, " damages!\n"));
                console.log("It's the enemy's turn to attack !");
                console.log("".concat(enemy.name, " attacked and dealt ").concat(enemy.str, " damages!\n"));
            }
            player.hp = player.hp - enemy.str;
        }
        else if (choice_attack === "2") {
            player.hp = heal(player, initial_player_max);
            console.log("It's the enemy's turn to attack !");
            player.hp = player.hp - enemy.str;
            console.log("".concat(enemy.name, " attacked and dealt ").concat(enemy.str, " damages!\n"));
        }
    }
    return player.hp;
}
function game(character, opponent) {
    var initial_player = (0, random_1.displayPlayer)("../jsonFolder/players.json"); //fonction getRndomPlayer
    var initial_opponent = (0, random_2.displayEnemies)("../jsonFolder/enemies.json"); //fonction getRndomEnemy
    var boss = (0, random_1.displayBosses)("../jsonFolder/bosses.json");
    var floors = 1;
    var initial_player_max = initial_player.hp;
    var initial_opponent_max = initial_opponent.hp;
    var exp = 0;
    var level = 1;
    while (floors <= 10) {
        console.log("========== FIGHT ".concat(floors, " ==========\n"));
        console.log("Your level :", level);
        console.log("A new monster appared with ".concat(initial_opponent.hp, " hp !\n"));
        if (floors === 10) {
            initial_opponent = (0, random_1.displayBosses)("../jsonFolder/bosses.json");
            initial_opponent_max = initial_opponent.hp;
        }
        //appel de la fonction
        // initial player hp = player_hp à chaque combat; 
        initial_player.hp = combat(initial_player, initial_opponent, initial_player_max, initial_opponent_max);
        //vérifier qui est la cause de la fin du combat
        if (floors === 10 && initial_opponent.hp <= 0) {
            console.log("You win !");
            break;
            // ou demander si le joueur veut refaire une partie        
        }
        else if (initial_player.hp <= 0) //si player=defeated => game_over, break
         {
            console.log("Game Over");
            break;
        }
        else if (initial_opponent.hp <= 0) //si opponent=defeated  => floors++
         {
            var r = (0, level_and_experience_1.default)(initial_player, exp, level);
            exp = r.exp;
            level = r.level;
            console.log("\nLevel ==> " + level);
            console.log("exp ==> " + exp + "\n");
            floors++;
        }
        initial_opponent = (0, random_2.displayEnemies)("../jsonFolder/enemies.json");
        initial_opponent_max = initial_opponent.hp;
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
