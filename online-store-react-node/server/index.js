require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require('./models/models')
const cors = require('cors')
//letting know to the server about the index.js from routes folder which contains all of the Routers
const router = require('./routes/index')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)

/* app.get('/', (req, res) => {
  res.status(200).json({message: 'WORKING!!!'})
}) */

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
