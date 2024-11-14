const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });

// Exportation d'un objet avec des méthodes pour la gestion des tokens JWT
module.exports = {
  // Méthode pour extraire le token JWT de l'en-tête "Authorization" et supprimer le préfixe "Bearer"
  verifyToken: function (authorization) {
    return authorization != null ? authorization.replace("Bearer ", "") : null;
  },

  // Méthode pour extraire l'ID de l'utilisateur à partir d'un token JWT
  getUser: function (authorization) {
    // Extraction du token JWT
    const token = this.verifyToken(authorization);

    // console.log(UserId : <${token}>);

    if (token != null) {
      try {
        // Vérification et décodage du token JWT en utilisant la clé secrète stockée dans les variables d'environnement
        const jwtToken = jwt.verify(token, process.env.SECRET);

        // Si la vérification réussit, on extrait l'ID de l'utilisateur à partir du token
        const idUser = jwtToken.id;
        return idUser;
      } catch (error) {
        // Gérez l'erreur ici (par exemple, journalisez-la ou renvoyez un message d'erreur)
        console.error(
          "Erreur lors de la vérification du jeton :",
          error.message
        );
        return null;
      }
    }

    return null;
  },
};