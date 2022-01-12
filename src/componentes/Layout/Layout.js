import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Filters from "../Filters";
import Excursions from "../Excursions";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../css/Layout.module.css';

const introKeyPressed = (event) => {
  

    let search = document.getElementById("searchBar").value; 
    console.log("Búsqueda: " + search);
  
}

const Layout = ({ children }) => {

    const [search, setSearch] = useState(''); //useState

    const url = 'http://localhost:3001/excursions?q=lastres';

    useEffect(() => {

        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
            
        })
        .catch(function(error) {
            console.log(error);
        });

    },[]);

    return(
      <Container className={styles.container}>
        <Row className={styles.nav}>
          <Col xs="4">
            <div className={styles.logo}>
              Viajar Juntos  
            </div>
          </Col>
          <Col xs="8">
            <Nav className="justify-content-end">
              <Nav.Item className={styles.searchBar} md="5">
                <div className="form-group">
                  <input id="searchBar" className="form-control" type="search"  placeholder="Busca una excursión" onKeyUp={introKeyPressed}/>
                </div>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ml-auto" as={Link} to="register">Regístrate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="login">Inicia sesión</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col> 
        </Row>
        <Row>
          <Col>
          <main>{children}</main>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <Filters/>
          </Col>
          <Col xs="9">
            <Excursions/>
          </Col>
        </Row>
        <Row className={styles.footer}>
          <Col xs="12">
            <p>© Viajar Juntos 2022. Todos los derechos reservados.</p>    
            <p><a href="mailto:viajarjuntos@gmail.com">Contacto</a></p>
          </Col>
        </Row>
        </Container>
     
    )
}

export default Layout;