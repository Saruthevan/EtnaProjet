export interface Monster {
    name: string,
    hp: number,
    description: string,
}
const monster: Monster = {
    name: "Deku baba",
    hp: 10,
    description: "Don't tell me you don't know about the Deku Baba! Cut it down when it has extended its body and Deku Nuts or Sticks will come out."
}

export function readObject(monster: Monster){
    console.log(monster.name+" "+ `(`+monster.hp+`hp`+`):`+" "+monster.description);
}