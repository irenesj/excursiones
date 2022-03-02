import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import Filters from "../Filters";
import Login from "../Login";
import Excursions from "../Excursions";
import LoginContext from "../../contexts/LoginContext";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../css/Layout.module.css';


const Layout = ({ children }) => {

  const context = useContext(LoginContext);
  // Variable that saves the information from the search input 
  const introKeyPressed = (event) => {

    let currentSearch = event.target.value; 
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

    const NoLoggedItems = <>
      <Nav.Item>
        <Nav.Link className="ml-auto" as={Link} to="register">Regístrate</Nav.Link>
      </Nav.Item> 
      <Nav.Item>
        <Login/>
      </Nav.Item>
    </>

    const LoggedItems = <>
    
    <Nav.Item className={styles.userProfile}>
      Bienvenido/a,
    </Nav.Item>
    </>
    
    return(
      <div className={styles.body}>
      <Container className={styles.container}>
        <Row className={styles.nav}>
          <Col className={styles.logo} xs="3">
             Excursiones Juntos 
          </Col>
          <Col xs="9">
            <Nav className="justify-content-end">
              <Nav.Item className={styles.searchBar} md="5">
                <div className="form-group">
                  <input id="searchBar" className="form-control" type="search" placeholder="Busca el sitio al que quieras ir..." onKeyUp={introKeyPressed}/>
                </div>
              </Nav.Item>
              { !context.login &&  NoLoggedItems}
              {context.login && LoggedItems}
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