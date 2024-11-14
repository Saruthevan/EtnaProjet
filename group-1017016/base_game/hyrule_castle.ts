const fs = require('fs');
import * as rl from 'readline-sync'; 
import character from './interface';
const getInput = (question: string) => rl.question(`${question}\n`);
import { displayBosses, displayPlayer } from './random';
import { displayEnemies } from './random';
import expe from '../mods/level_and_experience';


let content_players : string = fs.readFileSync('../jsonFolder/players.json', 'utf-8');
const tab_character : character[] = JSON.parse(content_players);

let content_opponent : string = fs.readFileSync('../jsonFolder/enemies.json', 'utf-8'); // permet de recuperer et traduire le json 
const tab_opponent : character[] = JSON.parse(content_opponent);

game(tab_character, tab_opponent);

function displayLife(playerD_hp: number, playerD_max: number) // Cette fonction nous permet d'afficher la barre de vie de chaque adversaire.
{
    let life: string[] = [];
    let i = 0;
    for (; i < playerD_hp; i++)
    {
        life[i] = "I";
    }

    for (let j = i; j < playerD_max; j++)
    {
        life[j] = "_";       
    }
    console.log(life.join(''),playerD_hp,"/",playerD_max);
}

function combat (player: character, enemy: character, initial_player_max: number, initial_opponent_max: number)
{   
    while (player.hp > 0 && enemy.hp > 0) //tant que les deux joeurs ne sont pas battus la boucle continue
    {
        
            console.log(`\n\x1b[31m ${enemy.name}:\x1b[39m ${enemy.hp}`);
            displayLife(enemy.hp, initial_opponent_max);
            console.log(`\n\x1b[92m ${player.name} :\x1b[39m ${player.hp}`);
            displayLife(player.hp, player.mxHp);
            console.log("\n-----------Options-----------");
            let choice_attack = getInput("1. Attack       2. Heal");  //choix entre attaquer et se soigner

        if (choice_attack === "1")
        {
            enemy.hp = enemy.hp - player.str;   
            if (enemy.hp < 0)
            {
                enemy.hp = 0;
            }

            else if (enemy.hp > 0 && player.hp > 0)
           {
            console.log(`You attacked and dealt ${player.str} damages!\n`);
            console.log("It's the enemy's turn to attack !");
            
            console.log(`${enemy.name} attacked and dealt ${enemy.str} damages!\n`);
           }
            player.hp = player.hp - enemy.str;
        }

        else if(choice_attack === "2")
        {
            player.hp = heal(player, initial_player_max);
            console.log("It's the enemy's turn to attack !");
            player.hp = player.hp - enemy.str;
            console.log(`${enemy.name} attacked and dealt ${enemy.str} damages!\n`);
        }
        
    }

    return player.hp;
    
}

function game (character: character[], opponent: character[])    
{
    let initial_player = displayPlayer("../jsonFolder/players.json"); //fonction getRndomPlayer
    let initial_opponent = displayEnemies("../jsonFolder/enemies.json"); //fonction getRndomEnemy
    let boss = displayBosses("../jsonFolder/bosses.json");
    let floors = 1;
    let initial_player_max = initial_player.hp;
    let initial_opponent_max = initial_opponent.hp;
    let exp = 0;
    let level = 1;


    while (floors <= 10)
    {
        console.log(`========== FIGHT ${floors} ==========\n`);
        console.log(`Your level :`,level);
        console.log(`A new monster appared with ${initial_opponent.hp} hp !\n`);

        if (floors === 10 )
        {
            initial_opponent = displayBosses("../jsonFolder/bosses.json");
            initial_opponent_max = initial_opponent.hp;
        }

        //appel de la fonction
        // initial player hp = player_hp à chaque combat; 
        initial_player.hp = combat(initial_player, initial_opponent, initial_player_max, initial_opponent_max);
        
        //vérifier qui est la cause de la fin du combat
       
        if (floors === 10 && initial_opponent.hp <= 0)
        {
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
            let r = expe(initial_player,exp,level);
            exp = r.exp;
            level = r.level;

            console.log("\nLevel ==> "+level);
            console.log("exp ==> " +exp+"\n");
            floors++;
        }

        initial_opponent = displayEnemies("../jsonFolder/enemies.json");
        initial_opponent_max = initial_opponent.hp;
    }
}

function heal(fighter: character, fighter_max: number)
{   
    fighter.hp += (fighter_max/2)
    fighter.hp = Math.floor(fighter.hp);

    if (fighter.hp > fighter_max) {
        fighter.hp = fighter_max;
    }
   return fighter.hp;
}