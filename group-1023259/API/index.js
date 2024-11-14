
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;
const Db = require("./config/db.js");
const UsersRoutes = require("./routes/UsersRoutes.js")



console.log(port);
app.use(express.json());
dotenv.config({ path: path.join(__dirname, "./config/.env") });

app.use("/users", UsersRoutes);
     
Db.sync()
     .then(() => {
          console.log('Connection has been established successfully.');
     })
     .catch((error) => {
          console.error('Unable to connect to the database:', error);
     });
 
app.get('/',(req, res) => {
     res.send ('Hello World!!!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
