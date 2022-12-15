import ListeLogements from "@/Assets/Api/logements.json";

const RetrieveOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id);
    return OneLogement;
}
const RetrieveAllLogement = () => {
    return ListeLogements;
}

export const LogementService = {
    RetrieveAllLogement,
    RetrieveOneLogement
}

export default LogementService