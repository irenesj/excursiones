import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Login from './Login';
import LandingPageUserProfile from './LandingPageUserProfile';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/NavigationBar.module.css';


function NavigationBar(props) {

    // Variable that says if some user is logged in or not
    const { login: isLoggedIn, user } = useSelector((state) => state.loginReducer);

    // Items that are displayed in the nav bar when no user is logged
    const NoLoggedItems = <>
        <Nav.Item>
            <Nav.Link className="ml-auto" as={Link} to="register">Regístrate</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Login />
        </Nav.Item>
    </>

    // Items that are displayed in the nav bar when an user is logged
    const LoggedItems = <>
        <Nav.Item>
            <LandingPageUserProfile name={user && user.name} />
        </Nav.Item>
    </>

    return (

        <Row className={styles.nav}>
            <Col className={styles.logo} xs="3">
                <Link to='/'>Excursiones Juntos</Link>
            </Col>
            <Col xs="9">
                <Nav className="justify-content-end">
                   <SearchBar setExcursions={props.setExcursions} />
                    {!isLoggedIn && NoLoggedItems}
                    {isLoggedIn && LoggedItems}
                </Nav>
            </Col>
        </Row>
    );
}

export default NavigationBar;

