const express = require('express')
const app = express();

app.get("/",(req, res) => {
    console.log("Hello !")
})

connecter(mongodb:127.0.0.1:27017);

app.listen(3000);
console.log("Attente des requêtes au port 3000");

