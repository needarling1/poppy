import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const Home = () => {
    const [pin, set_pin] = useState([]);


    useEffect(() => {

    const get_pins = async () => {
        try {
            const respond = await axios.get('http://localhost:4000/api/pins')
            set_pin(respond.data);
            // Reset form fields after successful creation
        } catch (error) {
            console.error('Error getting pin:', error);
        }
    }
    get_pins();
    }, [])


    return (
        <>
        <div className = "posts">
            {pin.map(pin => (
                <div key={pin.id}>
                    <img src = {pin.image}></img>
                    <h2>{pin.title}</h2>
                    <p>{pin.description}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home;