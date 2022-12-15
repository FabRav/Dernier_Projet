import React from "react";

import "@/Components/Banner/Banner.css";

function Banner({ picture, title }) {

    return (
        <section className="Banner_Container">
            <img className="Banner_Picture" src={picture} alt="ban ImageAccueil" />
            <div className="Banner_Effects"></div>
            <h1>{title}</h1>
        </section>
    );
}

export default Banner;