const Sequelize = require ('sequelize');
require('dotenv').config();

const config = require("./config.json")["development"];
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host:config.host,
        dialect: config.dialect,
    }
);

module.exports = sequelize;
