import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Filters from "../Filters";
import Login from "../Login";
import Excursions from "../Excursions";
import LandingPageUserProfile from "../LandingPageUserProfile";
import Footer from "../Footer";
import LoginContext from "../../contexts/LoginContext";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../css/Layout.module.css';


const Layout = ({ children }) => {

  const [search, setSearch] = useState(''); 
  const [excursionArray, setExcursionArray] = useState([]);

  const context = useContext(LoginContext);
  // Variable that saves the information from the search input 
  const introKeyPressed = (event) => {

    let currentSearch = event.target.value; 
    setSearch(currentSearch);

  }

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
    <Nav.Item>
      <LandingPageUserProfile name={context.user.name}/>
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
              { context.login && LoggedItems }
            </Nav>
          </Col> 
        </Row>
        <Row>
          <Col>
          <main>{children}</main>
          </Col>
        </Row>
        <Row>
          <Filters/>
          <Excursions excursionData={ excursionArray } />
        </Row>
        <Row >
          <Footer/>
        </Row>
        </Container>
      </div>
     
    )
}

export default Layout;