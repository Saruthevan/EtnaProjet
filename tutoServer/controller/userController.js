const usersGet = (req, res) => {
    res.status(200).json({message:"Tous les utilisateurs"})
}

const test = (req, res) => {
    res.status(200).json({message: "ça marche !"})
}

module.exports = {usersGet, test}