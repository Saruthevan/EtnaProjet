var lullaby = require("./lullaby.json");
function playLullaby() {
    if (lullaby.name === "Goron Lullaby") {
        console.log("Playing the Goron Lullaby...");
        console.log(lullaby.notes.toString().replace(",", ""));
    }
    else {
        console.log("This is not the Goron Lullaby.");
    }
}
playLullaby();
