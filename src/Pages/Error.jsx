import React from 'react';
import logo from '../components/Images/nardi.jpg'

const Error = () => {
    return (
        <div>
            <h1 style={{color: 'red', justifyContent: 'center', display: 'flex'}}> Вы перешли на несуществующую
                страницу</h1>
            <div style={{display: 'flex', justifyContent: 'center',}}>
                <img src={logo} width="1400" height="700"/>
            </div>
        </div>
    );
};

export default Error;