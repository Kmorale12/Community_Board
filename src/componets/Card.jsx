import React from 'react';

const Card = ({ description, name, buttonTitle }) => {
    return (
      <div className="card">
        <h2>{name}</h2>
        <p>{description}</p>
        <button className="card-button">{buttonTitle}</button>
      </div>
    );
  };




    export default Card;