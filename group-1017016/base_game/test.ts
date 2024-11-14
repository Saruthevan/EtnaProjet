const fs = require('fs');
import * as rl from 'readline-sync'; 
import character from './interface';
const getInput = (question: string) => rl.question(`${question}\n`);
import { displayBosses, displayPlayer } from './random';
import { displayEnemies } from './random';

console.log("start the game");

let content_players : string = fs.readFileSync('../jsonFolder/players.json', 'utf-8');
const tab_character : character[] = JSON.parse(content_players);

let content_opponent : string = fs.readFileSync('../jsonFolder/enemies.json', 'utf-8');
const tab_opponent : character[] = JSON.parse(content_opponent);

game(tab_character, tab_opponent);


function display(playerD_hp: number, playerD_max: number)
{
    //saut de lignes entre console.log
    //affichage barre des stats de chaque combattant
    //affichage couleurs

    let life: string[] = [];
    let i = 0;
    for (; i < playerD_hp; i++)
    {
        life[i] = "I";

    }

//    console.log(life.join(''));
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
        try {
            console.log(`\x1b[31m ${player.name}:\x1b[39m ${player.hp}`);
            display(player.hp, initial_player_max);
            console.log(`\x1b[92m ${enemy.name} :\x1b[39m ${enemy.hp}`);
            display(enemy.hp, initial_opponent_max);
        console.log("-----------Options-----------");
        const choice_attack = getInput("1. Attack         2. Heal");

        if (choice_attack === "1")
        {
            enemy.hp = enemy.hp - player.str;
            if (enemy.hp < 0)
            {
                enemy.hp = 0;
            }
           // console.log(`The enemy's hp is going down !`);
            console.log(`You attacked and dealt" ${player.str} "damages!`);
            
        }

        else if(choice_attack === "2")
        {

            player.hp = heal(player, initial_player_max);
        }

        else {
            return 0;
        }
        //rajouter une condition : si jms on choisi un autre numéro, reposer la qst

        console.log("It's the enemy's turn to attack !");
        player.hp = player.hp - enemy.str;
        console.log(`${enemy.name} attacked and dealt ${enemy.str} damages!`);
        
        } catch(error)
        {
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




function game (character: character[], opponent: character[])    
{
    let initial_player = displayPlayer("../jsonFolder/players.json"); //fonction getRndomPlayer
    let initial_opponent = displayEnemies("../jsonFolder/enemies.json"); //fonction getRndomEnemy
    let boss = displayBosses("../jsonFolder/bosses.json");
    let floors = 1;
    let initial_player_max = initial_player.hp;
    let initial_opponent_max = initial_opponent.hp;

    while (floors <= 10)
    {
        console.log(`========== FIGHT ${floors} ==========`);
        console.log(`Un nouveau monstre est apparût avec ${initial_opponent.hp} hp`);
        //appel de la fonction
        // initial player hp = player_hp à chaque combat; 
        if (floors === 10 )
        {
            initial_opponent = displayBosses("../jsonFolder/bosses.json");
        }
        initial_player.hp = combat(initial_player, initial_opponent, initial_player_max, initial_opponent_max);
        //vérifier qui est la cause de la fin du combat
        //si opponent=defeated  => floors++
        if (floors === 10 && initial_opponent.hp <= 0)
        {
            console.log("You win !");
            break;
            // ou demander si le joueur veut refaire une partie        
        }

        else if (initial_player.hp <= 0)
        {
            //si player=defeated => game_over, break
            console.log("Game Over");
            break;
        }

        floors++;
        //initial_opponent = //fonction getRndomEnemy
        //initial_opponent_max = initial_opponent.hp;
        initial_opponent = displayEnemies("../jsonFolder/enemies.json");
        initial_opponent.hp = initial_opponent_max; // SUpp après random
        //console.log(`Un nouveau monstre est apparût avec ${initial_opponent.hp}`);
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