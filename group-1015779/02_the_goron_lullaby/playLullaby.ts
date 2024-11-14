const lullaby = require("./lullaby.json");


function playLullaby(){
    if (lullaby.name === "Goron Lullaby")
    {
        let lullaby1 = lullaby.notes;
        console.log("Playing the Goron Lullaby...");
    
        console.log(lullaby.notes.toString()); 
    }
    else {
        console.log("This is not the Goron Lullaby.");
    }
}

playLullaby();