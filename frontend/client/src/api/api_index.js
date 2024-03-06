import axios from 'axios';

const url = 'http://localhost:4000/'

const get_pins = () => axios.get(url);

module.exports = get_pins