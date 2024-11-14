const express = require("express")
const mysql = require("mysql")
const users = require("./routes/usersRoutes")
const products = require("./routes/productsRoutes")
const port = process.env.PORT || 5000

const app = express(); 

app.post("/", (req,res) =>{
    res.json({message: "Bienvenue sur notre API en Node JS!"})
})

app.use(users)


const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password:'root',
    database: 'node',
    
})


app.listen(port, () => {
    console.log("Serveur en ligne");
}) 