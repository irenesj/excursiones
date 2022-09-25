import React from "react"
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Footer.module.css';


// This is the webpage footer
function Footer() {

    // Function that returns the current year
    const getCurrentYear = () => {

        return new Date().getFullYear();
        
    };

    return (

        <div className={styles.footer}>
            <Col xs="12">
                <p>© Excursiones Juntos 2021 - {getCurrentYear()}. Todos los derechos reservados.</p>
                <p><a href="mailto:excursionesjuntos@gmail.com">Contacto</a></p>
            </Col>
        </div>

    );
    
}

export default Footer;