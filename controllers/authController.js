const { hashPassword } = require("../helper/authHelper");
const userModel = require("../models/userModel");

const createUser = async(req, res) => {
    try {
        const {name, email, password, mobile} = req.body;

        if(!name || !email || !password || !mobile) {
            return res.status(400).send({message: 'Plesae, Provide complete details'})
        }

        const user = await userModel.findOne({ email })

        if(user) {
            return res.status(400).send({message: 'Email id already exist.'})
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await new userModel({
            name,
            email,
            password: hashedPassword,
            mobile
        }).save();

        return res.status(200).send({
            success: true,
            message: 'User Register Successfully',
            newUser
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error
        })
    }
}

module.exports = {createUser}