//controls routes that the user takes based on pins (pinterest version of posts i guess)
const pin = require(`../models/pin_model.js`)

const get_pins = async (req, res) => {
    try{
        const set_pins = await pin.find();

        res.status(200).json(set_pins);
    } catch (error) {
        res.status(404).json( {msg: error.message });
    }
}

const get_one_pin = async (req, res) => {
    try{
        const id = req.params.id
        const set_pin = await pin.findOne({ _id: id });

        res.status(200).json(set_pin);
    } catch (error) {
        res.status(404).json( {msg: error.message });
    }
}

const create_pin = async (req, res) => {
    const curr_pin = req.body;

    const new_pin = new pin(curr_pin)
    try {
        await new_pin.save();

        res.status(201).json(new_pin);
    } catch (error) {
        res.status(409).json( {msg: error.message})
    }
}

module.exports = { get_pins, get_one_pin, create_pin };