import React from "react"
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Footer.module.css';

function Footer(){

    return(
        <div className={styles.footer}>
            <Col xs="12">
                <p>© Excursiones Juntos 2022. Todos los derechos reservados.</p>    
                <p><a href="mailto:excursionesjuntos@gmail.com">Contacto</a></p>
            </Col>   
        </div>
        

    );
}

export default Footer;