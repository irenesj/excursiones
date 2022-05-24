import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login, logout} from '../../slicers/loginSlice';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import Register from '../Register';
import Filters from '../Filters';
import Excursions from '../Excursions';
import UserPage from '../UserPage';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../css/Layout.module.css';


/** This is the layout, here goes the web structure  */
export const Layout = ({ children }) => {

  // Variable we need to be able to use dispatchers
  const loginDispatch = useDispatch();

  // Array that has the excursions that are needed in that moment
  const [excursionArray, setExcursionArray] = useState([]);
  
  // This useEffect controls the token in the localStorage
  useEffect(() => {


  // This function ..
  const loadToken = () => {
  
    const localToken = localStorage["token"];
    // Variable that has the url that is needed for the fetch
    const url = `http://localhost:3001/token/${localToken}`;
    // Variable that saves the options that the fetch needs
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
        <NavigationBar setExcursions={setExcursionArray} />
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