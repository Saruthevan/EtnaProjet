const models = require("../models");
const jwtUtils = require("../middleware/jwtUtils");

module.exports = {
  create: async (req, res) => {
    const authorization = req.headers["authorization"];
    const userId = jwtUtils.getUser(authorization);

    const isAdmin = userId
      ? await models.Users.findOne({ where: { id: userId } })
          .then((user) => {
            return user.isAdmin;
          })
          .catch((e) => {
            return false;
          })
      : false;

    if (!isAdmin) {
      return res.status(400).json({ message: "Utilisateur non autorisé" });
    }

    // Extraction des données de la requête
    const { name, description, price, stock } = req.body;

    // Définir la liste des champs attendus
    const expectedFields = ["name", "description", "price", "stock"];

    // Vérification des champs obligatoires
    const missingFields = expectedFields.filter(
      (field) => !(field in req.body)
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Les champs suivants sont requis : ${missingFields.join(
          ", "
        )}`,
      });
    }

    // Vérification des champs supplémentaires non autorisés
    const extraFields = Object.keys(req.body).filter(
      (field) => !expectedFields.includes(field)
    );

    if (extraFields.length > 0) {
      return res.status(400).json({
        message: `Les champs suivants ne sont pas autorisés : ${extraFields.join(
          ", "
        )}`,
      });
    }

    if (name == "" || description == "" || price == "" || stock == "") {
      return res
        .status(500)
        .json({ message: "veuillez remplir tous les champs." });
    }

    const newProduct = await models.Products.create({
      name: name,
      description: description,
      price: price,
      stock: stock,
    });

    if (newProduct) {
      return res
        .status(200)
        .json({ message: "Product created !", product: newProduct });
    } else {
      return res.status(400).json({ message: "erreur" });
    }
  },

  update: async (req, res) => {
    const authorization = req.headers["authorization"];
    const userId = jwtUtils.getUser(authorization);

    const isAdmin = userId
      ? await models.Users.findOne({ where: { id: userId } })
          .then((user) => {
            return user.isAdmin;
          })
          .catch((e) => {
            return false;
          })
      : false;

    if (!isAdmin) {
      return res.status(400).json({ message: "Utilisateur non autorisé" });
    }

    const id = req.params.id;

    // Extraction des données de la requête
    const { name, description, price, stock } = req.body;

    // Définir la liste des champs attendus
    const expectedFields = ["name", "description", "price", "stock"];

    // Vérification des champs obligatoires
    const missingFields = expectedFields.filter(
      (field) => !(field in req.body)
    );

    // Vérifier qu'au moins un des champs est renseigné
    if (missingFields.length === expectedFields.length) {
      return res.status(400).json({
        message:
          "Au moins l'un des champs suivants est requis : " +
          expectedFields.join(", "),
      });
    }

    // Vérification des champs supplémentaires non autorisés
    const extraFields = Object.keys(req.body).filter(
      (field) => !expectedFields.includes(field)
    );

    if (extraFields.length > 0) {
      return res.status(400).json({
        message: `Les champs suivants ne sont pas autorisés : ${extraFields.join(
          ", "
        )}`,
      });
    }

    if (name == "" || description == "" || price == "" || stock == "") {
      return res.status(500).json({ message: "veuillez remplir le champ." });
    }

    const productUpdate = await models.Products.findOne({
      where: { id },
    });

    if (
      productUpdate.name === name ||
      productUpdate.description === description ||
      productUpdate.price === price ||
      productUpdate.stock === stock
    ) {
      return res
        .status(200)
        .json({ message: "Aucune modification nécessaire" });
    }

    await productUpdate
      .update({
        name: name ? name : productUpdate.name,
        description: description ? description : productUpdate.description,
        price: price ? price : productUpdate.price,
        stock: stock ? stock : productUpdate.stock,
      })
      .then((productUpdate) => {
        return res.status(200).json({
          message: "modification effectué",
          productUpdate: productUpdate,
        });
      })
      .catch((e) => {
        return res
          .status(400)
          .json({ message: "erreur lors de la modification" });
      });
  },

  delete: async (req, res) => {
    const authorization = req.headers["authorization"];
    const userId = jwtUtils.getUser(authorization);

    const isAdmin = userId
      ? await models.Users.findOne({ where: { id: userId } })
          .then((user) => {
            return user.isAdmin;
          })
          .catch((e) => {
            return false;
          })
      : false;

    if (!isAdmin) {
      return res.status(400).json({ message: "Utilisateur non autorisé" });
    }

    const id = req.params.id;

    const productDelete = await models.Products.findOne({
      where: { id },
    });

    if (productDelete) {
      await productDelete
        .destroy({
          where: { id: id },
        })
        .then(() => {
          return res.status(200).json({ message: "Product delete !" });
        })
        .catch((e) => {
          return res
            .status(400)
            .json({ message: "erreur lors de la suppression" });
        });
    }
  },

  getAllProducts: async (req, res) => {
    await models.Products.findAll()
      .then((products) => {
        return res.status(200).json({ products: products });
      })
      .catch((e) => {
        return res.status(400).json({ message: "une erreur est survenue." });
      });
  },

  getOneProduct: async (req, res) => {
    const idProduct = req.params.id;

    await models.Products.findOne({
      where: { id: idProduct },
    })
      .then((product) => {
        return res.status(200).json({ product: product });
      })
      .catch((e) => {
        return res.status(400).json({ message: "post pas trouvé" });
      });
  },
};
