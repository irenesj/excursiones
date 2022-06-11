import React from "react";
import { Row, Col, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Login from './Login';
import LandingPageUserProfile from './LandingPageUserProfile';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/NavigationBar.module.css';

function NavigationBar(props) {

    // Variable that says if some user is logged in or not
    const { login: isLoggedIn, user } = useSelector((state) => state.loginReducer);

    // Items that are displayed in the nav bar when no user is logged
    const NoLoggedItems = <Container className={styles.noLoggedItems}>
        <Row>
            <Col xs="6">
                <Nav.Item>
                    <Nav.Link className="ml-auto" as={Link} to="register">Regístrate</Nav.Link>
                </Nav.Item>
            </Col>
            <Col xs="6">
                <Nav.Item>
                    <Login />
                </Nav.Item>
            </Col>
        </Row>
    </Container>;

    // Items that are displayed in the nav bar when an user is logged
    const LoggedItems = <>
        <Nav.Item>
            <LandingPageUserProfile name={user && user.name} />
        </Nav.Item>
    </>

    return (

        <Row className={styles.nav}>
            <Logo />
            <Col xs="12" md="9">
                <Nav className="justify-content-end">
                    <Container>
                        <Row>
                            <Col xs="12" md="12" xl="8">
                                <SearchBar setExcursions={props.setExcursions} />
                            </Col>
                            <Col xs="12" md="12" xl="4">
                                {!isLoggedIn && NoLoggedItems}
                                {isLoggedIn && LoggedItems}
                            </Col>
                        </Row>
                    </Container>
                </Nav>
            </Col>
        </Row>

    );

}

export default NavigationBar;

