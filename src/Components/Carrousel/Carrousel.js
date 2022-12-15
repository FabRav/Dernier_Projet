import React, { useState } from 'react';

import "@/Components/Carrousel/Carrousel.css";

import ArrowLeft from "@/Assets/Images/Components/Carrousel/CarrouselArrowLeft.png";
import ArrowRight from "@/Assets/Images/Components/Carrousel/CarrouselArrowRight.png";

const Carrousel = ({ slider }) => {

    const [index, setIndex] = useState(0);   //initialisation du slider index à 0

    const NextPicture = () => {
        setIndex(index === slider.length - 1 ? 0 : index + 1);  // on repasse au premier index quand on est au dernier sinon on incrémente
    };

    const PreviousPicture = () => {
        setIndex(index === 0 ? slider.length - 1 : index - 1)   // on repasse au dernier index quand on est au premier sinon on incrémente
    };

    const CurrentIndex = index;

    // console.log(index)
    // console.log(slider)

    return (
        <div className="Carrousel_Container">
            <img className="Arrow_Left" src={ArrowLeft} alt="flèche" onClick={() => PreviousPicture()} />
            <div className="Slider_Img">
                {
                    slider.map((img, index) => {
                        if (index === CurrentIndex) {
                            return (<img className="Slider_Img" key={index} src={img} alt="appartement" />)
                        } else {
                            return ("");
                        }

                    })
                }
            </div>
            <span className="Index_Img"> {index + 1} / {slider.length}  </span>
            <img className="Arrow_Right" src={ArrowRight} alt="flèche" onClick={() => NextPicture()} />
        </div >

    );
}

export default Carrousel;