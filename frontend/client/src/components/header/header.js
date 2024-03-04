import React from 'react';
import './styles.modules.css';

const header = () => {
    return (
        <>
        
        <div className = "navbar">
            
           
            <div className = "left">
            <img src = "https://shadowzael.files.wordpress.com/2015/07/bakemonogatari-key-animation-note-vol-1-art-book-7-2.jpg?w=648" alt = "logo"></img>
                <ul>
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">Create</a></li>
                </ul>
            </div>

            <div className = "right">
            <ul>
                <li><a href = "#">About</a></li>
                <li><a href = "#">Log In</a></li>
                <li><a href = "#">Sign Up</a></li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default header;