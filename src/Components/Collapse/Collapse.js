// Importation des dépendances

import React, { useState } from "react";

import "@/Components/Collapse/Collapse.css";

import CollapseUp from "@/Assets/Images/Components/Collapse/CollapseUp.png";
import CollapseDown from "@/Assets/Images/Components/Collapse/CollapseDown.png";

function Collapse({ title, description }) {

    // Création d'une condition avec un état qui change lorsque l'on clique sur l'image 

    const [open, setOpen] = useState(false);

    const CollapseOnClick = () => {
        setOpen(!open);
    }

    return (
        <li className="Collapse">
            <div className="Collapse_Title_Arrow_Box" onClick={CollapseOnClick} >
                <h3 className="Collapse_title">{title}</h3>
                <span >
                    <img src={open ? CollapseUp : CollapseDown} alt="Ancre" className="Collapse_Img" />
                </span>
            </div>
            {
                open && (
                    <div className="Collapse_Description">
                        {description}
                    </div>
                )
            }
        </li>
    );
}

export default Collapse;