"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prison = [
    {
        number: 1,
        is_guarded: true,
        prisoners: [
            {
                species: "Deku Baba",
                days_left: 20,
                crime: "Attacking a merchant"
            },
            {
                species: "Deku Baba",
                days_left: 20,
                crime: "Attacking a merchant"
            }
        ]
    },
    {
        number: 2,
        is_guarded: false,
        prisoners: []
    },
    {
        number: 3,
        is_guarded: false,
        prisoners: [
            {
                species: "Monkey",
                days_left: 999999,
                crime: "Kidnapping the princess"
            }
        ]
    }
];
//console.log(prison[0.prspecies])
function findMonkey(prison) {
    for (var name_1 in prison) {
        if (prison[name_1].is_guarded === false) {
            for (var prisoner in prison[name_1].prisoners) {
                if (prison[name_1].prisoners[prisoner].species === "Monkey" && prison[name_1].is_guarded === false) {
                    console.log("The monkey is in the cell number " + prison[name_1].number + " The cell is not guarded.");
                }
                else if (prison[name_1].prisoners[prisoner].species === "Monkey" && prison[name_1].is_guarded === true) {
                    console.log("The monkey is in the cell number " + prison[name_1].number + " The cell is guarded.");
                }
                else {
                    console.log("The monkey isn't here.");
                }
            }
        }
    }
}
exports.default = findMonkey;
findMonkey(prison);
