import React from "react";
import "@/Components/Card/Card.css";

function Card({ picture, title }) {
    return (
        <li className="Main_Container">
            <img className="Card_Picture" src={picture} alt="Logement" />
            <div className="Card_Gradient"></div>
            <h3 className="Card_Title">{title}</h3>
        </li>
    );
}

export default Card;