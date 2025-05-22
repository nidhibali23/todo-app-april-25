// About.js
import React from 'react';

const About = () => {
    return (
        <section style={{ padding: '50px', maxWidth: '1000px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ fontSize: '50px', color: '#333' }}>📝 About This App</h2>
            <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.6' }}>
                This is a simple and user-friendly <strong>To-Do Web Application</strong> designed to help you manage your daily tasks efficiently.
                You can easily add, delete, and mark tasks as completed to stay organized and productive throughout the day.
            </p>
            <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.6' }}>
                Whether you're tracking personal tasks or planning your work schedule, this app keeps things clean and straightforward.
            </p>
            <h3 style={{ fontSize: '20px', color: '#333', marginTop: '20px' }}>Features:</h3>
            <ul style={{ fontSize: '20px', color: '#555', lineHeight: '1.6' }}>
                <li>Add and delete tasks</li>
                <li>Recent Task Edit</li>
                <li>Edit Task</li>
                <li>Clean and responsive UI</li>
            </ul>
            <p style={{ fontSize: '30px', color: '#555', lineHeight: '1.6', marginTop: '40px' }}>
                Built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> (or <strong>React</strong>), this project was developed as part of my web development learning journey.
            </p>
        </section>
    );
};

export default About;
