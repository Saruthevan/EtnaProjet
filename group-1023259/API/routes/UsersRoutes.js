const express = require("express");
const router = express.Router(); // Utilisation de express.Router()
const userCtrls = require("../controllers/UsersController.js");

router.post("/register", userCtrls.register);
// router.post("/auth", userCtrls.auth);
// router.put("/user/update/:id", userCtrls.update);
// router.delete("/user/delete/:id", userCtrls.deleteUser);
// router.get("/users", userCtrls.getAllUsers);
// router.get("/user/:id", userCtrls.getProfile);

module.exports = router; // Utilisation de module.exports pour l'export