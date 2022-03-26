import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Filters from "../Filters";
import Login from "../Login";
import Excursions from "../Excursions";
import LandingPageUserProfile from "../LandingPageUserProfile";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";
import { login, logout} from '../../slicers/loginSlice';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../css/Layout.module.css';


/** This is the layout, here goes the web structure  */
const Layout = ({ children }) => {


  // Variable we need to be able to use dispatchers
  const loginDispatch = useDispatch();

  // Variable that saves the search that the user writes in the search bar 
  const [search, setSearch] = useState(''); 

  // Array that has the excursions that are needed in that moment
  const [excursionArray, setExcursionArray] = useState([]);

  // Variable that saves the search that the user writes in the search bar 
  const options = {
  
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' }

  };

  // Items that are displayed in the nav bar when no user is logged
  const NoLoggedItems = <>
  <Nav.Item>
    <Nav.Link className="ml-auto" as={Link} to="register">Regístrate</Nav.Link>
  </Nav.Item> 
  <Nav.Item>
    <Login/>
  </Nav.Item>
  </>

  // Items that are displayed in the nav bar when a user is logged
  const LoggedItems = <>
    <Nav.Item>
      <LandingPageUserProfile name={ "TODO Poner el nombre del usuario" }/>
    </Nav.Item>
    </>
 
  // Variable that says if some user is logged in or not
  const isLoggedIn = useSelector( (state) => state.loginSlice.login );

  // Variable that has the result of the search bar to know what excursion the user is looking for
  const url = `http://localhost:3001/excursions?q=${search}`;



  // Function that saves the information from the search input and updates its state
  const introKeyPressed = (event) => {

    let currentSearch = event.target.value; 
    setSearch(currentSearch);

  }

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

    const loadToken = () => {
  
      const localToken = localStorage["token"];
      const url = `http://localhost:3001/token/${localToken}`;
  
      if(localToken){
  
        loginDispatch(login());
        fetch(url, options)
        .then((resp) => {
  
          if (resp.status === 404){
            throw new Error();
          }
          return resp.json();
  
        })
        .then(function(data){
  
          console.log(data)
          //setUser(data.user);
  
        })
        .catch(function(error) {
  
            console.log(error);
            loginDispatch(logout());
            delete localStorage["token"];
  
        });
  
      }

    }
  
    useEffect(() => {
  
      loadToken();
  
    }, []);


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
              { !isLoggedIn &&  NoLoggedItems}
              { isLoggedIn && LoggedItems }
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