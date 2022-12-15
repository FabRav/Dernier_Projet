import "@/Components/Stars/Stars.css";

import OrangeStar from "@/Assets/Images/Components/Stars/StarsOrange.png";
import EmptyStar from "@/Assets/Images/Components/Stars/StarsWhite.png";

function Ratings({ rate }) {

    const StarNumber = [1, 2, 3, 4, 5];

    //affichage des étoiles pleine ou vide selon le nombre passé en props

    return (
        <div className="Rating_Stars">

            {
                StarNumber.map((_, number) => {

                    if (number + 1 > rate) {
                        return (
                            <img key={number} className="Star" src={EmptyStar} alt="Etoile Blanche" />
                        )

                    } else {
                        return (
                            <img key={number} className="Star" src={OrangeStar} alt="Etoile Orange" />

                        )
                    }

                })
            }
        </div>

    );
};

export default Ratings;