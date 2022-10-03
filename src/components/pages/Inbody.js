import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import imgInbody from './userInbody-Image.png';

function Inbody () {
    return (
        <div>
        <h3>김동양님 인바디</h3>
        <br></br>
        <img src={imgInbody} ></img>
        </div>
    )
}

export default Inbody;