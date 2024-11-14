const { log } = require("console");
const models = require("../models"); // Importation des modèles Sequelize



async function register (request, response) {
    const {userName, email, password } = request.body;
    console.log(request.body);
    if (userName){
        const NewUser = await models.Users.create({
            userName:userName, 
            email:email,
            password: password
        });
        return response.status(200).json({message:"Donnée bien reçu."})

    }else {
        return response.status(400).json({message:"Invalide"})
    }
}



module.exports = {register}