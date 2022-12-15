// imports des dépendances, composants et modules utilisés pour la page fiche logement

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LogementService from "@/_Services/Logement.service.js";

import "@/Pages/Public/Fiche-logement/Logement.css";

import Carrousel from "@/Components/Carrousel/Carrousel";
import Profile from "@/Components/Profile/Profile"
import Tag from "@/Components/Tag/Tag"
import Ratings from "@/Components/Ratings/Ratings"
import Collapse from "@/Components/Collapse/Collapse";

// Fonction principale de la page Fiche-Logement

const Logement = () => {

    const { id } = useParams();
    const navigateTo = useNavigate();
    const [Logementinfo, SetLogementinfo] = useState({});
    const [Loading, setLoading] = useState(true);

    // appel de la fonction au chargement de la page avec use effect pour récupérer les informations du logement via l'id dans l'url

    useEffect(() => {

        const RetrieveLogementInfo = async () => {
            const Logement = await LogementService.RetrieveOneLogement(id);
            if (Logement) {
                SetLogementinfo(Logement);
                setLoading(false);
            } else {
                navigateTo("/404CeciNestPasUneUrlValide");
            }
        }
        RetrieveLogementInfo();
        // eslint-disable-next-line
    }, [])

    // warning à ignorer car on appel une fonction depuis use effect qui n'est pas présente dans les dépendances mais cela ne pose pas problème


    const transformToList = (Equipements) => {
        return (
            <div>
                {
                    Equipements.map((equipement, index) => {
                        return (
                            <p className="List_Equip" key={index}>{equipement}</p>
                        )
                    })
                }
            </div>
        )
    }



    if (Loading) return (<p className="Load_Img">Les données sont en train de charger</p>)
    return (
        <section className="SectionLogement">
            <Carrousel slider={Logementinfo.pictures} />
            <div className="Components_Container">
                <ul className="Titles_Tags_container">
                    <li>
                        <h1>{Logementinfo.title}</h1>
                        <h2>{Logementinfo.location}</h2>
                    </li>
                    <li>
                        <Tag tags={Logementinfo.tags} />
                    </li>
                </ul>
                <ul className="Host_Ratings_Container">
                    <li>
                        <Profile host={Logementinfo.host} />
                    </li>
                    <li>
                        <Ratings rate={Logementinfo.rating} />
                    </li>
                </ul>
            </div>
            <div className="Description_Equip_Container">
                <div className="Description_DropDown">
                    <Collapse title="Description" description={Logementinfo.description} />
                </div>
                <div className="Equip_DropDown">
                    <Collapse title="Équipements" description={transformToList(Logementinfo.equipments)} />
                </div>
            </div>
        </section>
    );
}

export default Logement;