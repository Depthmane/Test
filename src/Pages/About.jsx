import React from 'react';
import logo from '../components/Images/logo.jpg'

const About = () => {
    return (
        <div>
            <h1>
           Это тестовое приложение С КАЙФОМ
            </h1>
            <div style={{display: 'flex', justifyContent: 'center',}}>
                <img src={logo} width="1024" height="900"/>
            </div>
        </div>
    );
};

export default About;