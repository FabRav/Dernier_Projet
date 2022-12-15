import "@/Components/Ratings/Ratings.css";

import FullStar from "@/Assets/Images/Components/Ratings/FullStar.png";
import EmptyStar from "@/Assets/Images/Components/Ratings/EmptyStar.png";

function Ratings({ rate }) {

    const StarNumber = [1, 2, 3, 4, 5];

    //affichage des étoiles pleine ou vide selon le nombre passé en props

    return (
        <div className="Rating_Stars">

            {
                StarNumber.map((_, number) => {

                    if (number + 1 > rate) {
                        return (
                            <img key={number} className="Star" src={EmptyStar} alt="Etoile Vide" />
                        )

                    } else {
                        return (
                            <img key={number} className="Star" src={FullStar} alt="Etoile Pleine" />

                        )
                    }

                })
            }
        </div>

    );
};

export default Ratings;