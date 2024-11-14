const express = require("express");
const router = express.Router(); // Utilisation de express.Router()
const productCtrls = require("../controllers/productControllers.js");

router.post("/create", productCtrls.create);
router.put("/product/update/:id", productCtrls.update);
router.delete("/product/delete/:id", productCtrls.delete);
router.get("/products", productCtrls.getAllProducts);
router.get("/product/:id", productCtrls.getOneProduct);

module.exports = router; // Utilisation de module.exports pour l'export