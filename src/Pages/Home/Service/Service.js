import React from 'react';
import './Service.css';

const Service = ({service}) => {
    // const {Service}=props;
    const {name,price,description,img}=service;
    return (
        <div className="service">
         <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <p className="px-3">{description}</p>
        
        </div>
    );
};

export default Service;