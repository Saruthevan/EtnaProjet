import { CanceledError } from "axios";
import character from "../base_game/interface";


export default function expe(player: character, exp: number, level: number)
{
    exp += getRandomIntInclusive(15,50);
    if (exp >= 100 )
    {
     level++;
     console.log (" Level up ! You're level",level,"!\n");
     
    exp = exp - 100;
    exp = 0;
    let i = getRandomIntInclusive (0,1)
    if(i === 0)
        {
            let n = getRandomIntInclusive(1,5);
            player.str = player.str + n;
            console.log("You gained "+n+" str !");
        } else{
            let u = getRandomIntInclusive(1,5);
            
            player.hp = player.hp + u;
            player.mxHp += u;
            console.log("You gained "+u+" hp !");
        }
    }
    return {
        "level": level,
        "exp": exp
    }
}

export function getRandomIntInclusive(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }