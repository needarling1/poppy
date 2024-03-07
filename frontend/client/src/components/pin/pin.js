import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const Pin = () => {
    const [pin, set_pin] = useState('');


    useEffect(() => {
    const get_pin = async () => {
        try {
            const respond = await axios.get(`http://localhost:4000/api/pins${window.location.pathname}`)
            set_pin(respond.data);
            // Reset form fields after successful creation
        } catch (error) {
            console.error('Error getting pin:', error);
        }
    }
    get_pin();
    }, [])


    return (
        <>
        <div className = "posts">
            <div key={pin._id}>
                <img src={pin.image} alt="Pin Image" />
                <h2>{pin.title}</h2>
                    <p>{pin.description}</p>
            </div>

        </div>
        </>
    )
}

export default Pin;