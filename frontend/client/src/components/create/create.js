import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

const Create = () => {
    const [title, set_title] = useState('');
    const [description, set_desc] = useState('');
    const [image, set_image] = useState('');

    const post_pin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/create', { 
                title: title,
                description: description,
                image: image });
            console.log('Pin created:', response.data);
            // Reset form fields after successful creation
            set_title('');
            set_desc('');
            set_image('');
        } catch (error) {
            console.error('Error creating pin:', error);
        }
    }

    const convert_to_base64 = (img) => {
        try {
        return new Promise((resolve, reject) => {
            const file_reader = new FileReader();
            file_reader.readAsDataURL(img);
            file_reader.onload = () => {
              resolve(file_reader.result);
            };
        })
        } catch (error){
            console.error('Error posting image:', error);
        }
    }

    const handle_upload = async (e) => {
        const image = e.target.files[0];
        const base64 = await convert_to_base64(image);
        set_image(base64);
      };

    return (
        <>
        <h1>Create Pin</h1>
        <div className='spans'>
        <form onSubmit = {post_pin}>
            <span>
                <input 
                    type = "file"
                    name = "file"
                    onChange = {(change) => handle_upload(change)}
                    placeholder = "Upload an Image"/>
            </span>
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