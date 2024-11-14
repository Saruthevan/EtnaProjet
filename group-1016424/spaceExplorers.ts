import { loadavg } from "os";
import {RocketType,Charge, Result } from "./ressources";

const rocketTypes : RocketType[] = [
    { type: 'Galactic', chargeCapacity: 50 },
    { type: 'Stellar', chargeCapacity: 10 },
    { type: 'Lunar', chargeCapacity: 5 },
    { type: 'Planetary', chargeCapacity: 1 }
];

const charges : Charge[] = [
    { planet: 'Mars', weight: 30 },
    { planet: 'Jupiter', weight: 17 },
    { planet: 'Venus', weight: 50 }
];

// Parametres (tableau de RocketType[] et tableau de Charge[])
// Return -> tableau Result[] 
// Qu'est ce qu'une interface : ça permet de savoir comment on va structurer et manipuler les valeurs de l'objet 
function spaceExplorers(rocketTypes: RocketType[], charge: Charge[]): Result[] 
{
    let results: Result[]= [];// c'est au début 
    let weightCurrent : number;

    for (let i = 0 ; i < charges.length; i ++)
     {
        weightCurrent = charges[i].weight; 
        let rocketCurrent : Rocket = {
            type : rocketTypes[j].type,
            count : 
        }
        for (let j = 0; j < rocketTypes.length; j++)
        {
                if (weightCurrent >= rocketTypes[j].chargeCapacity)
                {
                 for (let k = 0; k< rockets.length; k++){

                 
                 if (typeDeFuseeCherche === rockets[k].type)
                 {
                    rockets[k]
                 }
                
                }
        }
    }

    return result; // c'est à la fin 
}

let rockets: Roc




