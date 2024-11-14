const express = require('express')
const app = express();

app.get("/",(req, res) => {
    console.log("Hello !")
})

connecter("mongodb:127.0.0.1:27017/",(erreur) => {
    if (erreur) {
        console.log("erreur lors de la connexion avec la base de données");
        process.exit(-1);
    } else {
        console.log("Connexion avec la base de données établie");
        app.listen(3000);
        console.log("Attente des requêtes au port 3000");
    }
});


