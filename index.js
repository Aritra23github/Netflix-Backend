const express = require('express');
const { Sequelize } = require('sequelize');

const db = require('./config/database');

require('dotenv').config(); 

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World');
});

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