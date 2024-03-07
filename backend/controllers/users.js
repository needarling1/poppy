const user = require(`../models/user_model.js`)

const get_users = async (req, res) => {
    try{
        const set_users = await pin.find();

        res.status(200).json(set_users);
    } catch (error) {
        res.status(404).json( {msg: error.message });
    }
}

const create_user = async (req, res) => {
    const curr_user = req.body;

    const new_user = new user(curr_user)
    try {
        await new_user.save();

        res.status(201).json(new_user);
    } catch (error) {
        res.status(409).json( {msg: error.message})
    }
}

module.exports = { get_users, create_user };