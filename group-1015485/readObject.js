"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monster = {
    name: "Deku baba",
    hp: 10,
    description: "Don't tell me you don't know about the Deku Baba! Cut it down when it has extended its body and Deku Nuts or Sticks will come out."
};
function readObject(monster) {
    console.log(monster.name + " " + "(" + monster.hp + "hp" + "):" + " " + monster.description);
}
exports.default = readObject;
readObject(monster);
