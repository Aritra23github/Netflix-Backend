const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');
require('dotenv').config();

const SECRET = process.env.SECRET_KEY;

const User = db.User;

exports.signup = async (req, res) => {
    try {
       const { firstName, lastName, email, password } = req.body;

       const isUserExists = await db.User.findOne({
        where: {
            email: email
        }
       });

        if (isUserExists) {
            return res.status(200).send({message: "User alreday exists", data: User});
        } else {
            const User = await db.User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: bcrypt.hashSync(password, 10)
            });
    
           return res.status(200).send({message: "User created successfully", data: User});
        }
    } catch (error) {
        console.log(error);
    }
}

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isUserExists = await db.User.findOne({
            where: {
                email: email
            }
        });

        if (isUserExists) {
            let isPasswordCorrect = bcrypt.compareSync(password, isUserExists.password);

            if (!isPasswordCorrect) return res.status(403).send({ message: "Password is incorrect"});

            let token = jwt.sign({ id: isUserExists.id }, SECRET, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            let result = {
                ...isUserExists.dataValues,
                token: token ?? null,
            };

            return res.status(200).send({message: "User logged in successfully", data: result});
        } else {
            return res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
    }
}