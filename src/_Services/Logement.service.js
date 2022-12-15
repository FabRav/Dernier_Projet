/** Import des modules nécessaires */
import ListeLogements from "@/Assets/Api/logements.json";

// fonction récuperation de tous les logements.
const RetrieveAllLogement = () => {
    return ListeLogements;
}

// fonction recupération d'un logement.

const RetrieveOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id);
    return OneLogement;
}

// export des fonction pour les reutiliser dans les pages

export const LogementService = {
    RetrieveAllLogement,
    RetrieveOneLogement
}


export default LogementService