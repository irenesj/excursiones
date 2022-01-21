import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Filters from "../Filters";
import Excursions from "../Excursions";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../css/Layout.module.css';

const Layout = ({ children }) => {


  const introKeyPressed = (event) => {

    let currentSearch = document.getElementById("searchBar").value; 
    setSearch(currentSearch);

  }

  const [search, setSearch] = useState(''); 
  const [excursionArray, setExcursionArray] = useState([]);

  const url = `http://localhost:3001/excursions?q=${search}`;

    useEffect(() => {

        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {

            setExcursionArray(data);

        })
        .catch(function(error) {

            console.log(error);

        });

    }, [search]);

    return(
      <div className={styles.body}>
      <Container className={styles.container}>
        <Row className={styles.nav}>
          <Col xs="4">
            <div className={styles.logo}>
              Excursiones Juntos  
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
            <Excursions excursionData={ excursionArray } />
          </Col>
        </Row>
        <Row className={styles.footer}>
          <Col xs="12">
            <p>© Excursiones Juntos 2022. Todos los derechos reservados.</p>    
            <p><a href="mailto:excursionesjuntos@gmail.com">Contacto</a></p>
          </Col>
        </Row>
        </Container>
      </div>
     
    )
}

export default Layout;