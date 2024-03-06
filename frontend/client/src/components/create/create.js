import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

const Create = () => {
    const [title, set_title] = useState('');
    const [description, set_desc] = useState('');

    const post_pin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/create', { 
                title: title,
                description: description });
            console.log('Pin created:', response.data);
            // Reset form fields after successful creation
            set_title('');
            set_desc('');
        } catch (error) {
            console.error('Error creating pin:', error);
        }
    }

    return (
        <>
        <h1>Create Pin</h1>
        <div className='spans'>
        <form onSubmit = {post_pin}>
            <span>
                <input 
                    type = "text" 
                    value = {title} 
                    onChange = {(change) => set_title(change.target.value)} 
                    placeholder = "Add a Title"/>
            </span>
            <span>
                <input 
                    type = "text"
                    value = {description} 
                    onChange = {(change) => set_desc(change.target.value)} 
                    placeholder = "Add a Description"/>
            </span>
            <button type = 'submit'>Post</button>
            </form>
        </div>
        
        </>
    )
}

export default Create;