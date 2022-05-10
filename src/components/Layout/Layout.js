import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout} from '../../slicers/loginSlice';
import { Routes, Route, Link } from 'react-router-dom';
import Register from '../Register';
import Filters from '../Filters';
import Login from '../Login';
import Excursions from '../Excursions';
import LandingPageUserProfile from '../LandingPageUserProfile';
import UserPage from '../UserPage';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../css/Layout.module.css';


/** This is the layout, here goes the web structure  */
export const Layout = ({ children }) => {

  // Variable we need to be able to use dispatchers
  const loginDispatch = useDispatch();

  // Variable that saves the search that the user writes in the search bar 
  const [search, setSearch] = useState(''); 

  // Array that has the excursions that are needed in that moment
  const [excursionArray, setExcursionArray] = useState([]);
 
  // Variable that says if some user is logged in or not
  const {login: isLoggedIn, user} = useSelector( (state) => state.loginReducer);

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
      <LandingPageUserProfile name={user && user.name}/>
    </Nav.Item>
    </>

  // Variable that has the result of the search bar to know what excursion the user is looking for
  



  // Function that saves the information from the search input and updates its state
  const introKeyPressed = (event) => {

    let currentSearch = event.target.value; 
    setSearch(currentSearch);

  }

  // This useEffect ...
  useEffect(() => {

    const url = `http://localhost:3001/excursions?q=${search}`;

      fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {

        setExcursionArray(data);

      })
      .catch(function(error) {

        console.log(error);

    });

  }, [search]);

  
  
  // This useEffect
  useEffect(() => {


  // This function ..
  const loadToken = () => {
  
    const localToken = localStorage["token"];
    const url = `http://localhost:3001/token/${localToken}`;
    // Variable that saves the search that the user writes in the search bar 
    const options = {
  
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }

    };
  
    if(localToken){
  
      fetch(url, options)
      .then((resp) => {
  
      if (resp.status === 404){
        throw new Error();
      }
        return resp.json();
  
      })
      .then(function(data){
  
        loginDispatch(login({

          user: data.user,
          token: data.token

      }))
      })
      .catch(function(error) {
  
        console.log(error);
        loginDispatch(logout());
        delete localStorage["token"];
  
      });
  
    }

  }
    
    loadToken();
    
  }, [loginDispatch]);


  return(

    <Container className={styles.container}>
      <Row className={styles.nav}>
        <Col className={styles.logo} xs="3">
          <Link to='/'>Excursiones Juntos</Link> 
        </Col>
        <Col xs="9">
          <Nav className="justify-content-end">
            <Nav.Item className={styles.searchBar} md="5">
            <div className="form-group">
              <input id="searchBar" className="form-control" type="search" placeholder="Busca el sitio al que quieras ir..." onKeyUp={introKeyPressed} ref={element=>(element||{}).onsearch=introKeyPressed}/>
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
        <Routes>
          <Route path='/' element={ <Excursions excursionData={ excursionArray } />} />
          <Route path='register' element={<Register />}/> 
          <Route path='userPage' element={<UserPage /> } />  
        </Routes>
      </Row>
      <Row >
        <Footer/>
      </Row>
    </Container>
      
  )
      
}

export default Layout;