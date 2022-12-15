// importation des modules
import React from 'react';
import '@/Layouts/Footer/Footer.css'

//importation de l'image du logo
import PictureLogo from '@/Assets/Images/LogoFooter.png'


const Footer = () => {
    return (
        <footer>
            <div className="Box">
                <img src={PictureLogo} alt="Logo Kasa" />
                <p>© 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;