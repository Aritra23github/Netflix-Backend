const express = require('express');
const { Sequelize } = require('sequelize');
const routes = require('./routes');
const db = require('./config/database');
const cors = require('cors');

require('dotenv').config(); 

const app = express();

const port = process.env.PORT;

app.use((express.json({ limit: "30mb", extended: true})));
app.use((express.urlencoded({ limit: "30mb", extended: true})));
app.use((cors()));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(routes);

const initApp = async () => {
    console.log("Testing the database connection..");
    const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
        host: db.HOST,
        dialect: db.dialect
    });
      
      
    // Test the connection.
    try {
       await sequelize.authenticate();
       console.log("Connection has been established successfully.");
       /**
        * Start the web server on the specified port.
        */
 
       app.listen(port, () => {
          console.log(`Server is running at: http://localhost:${port}`);
       });
    } catch (error) {
       console.error("Unable to connect to the database:", error);
    }
};

initApp();