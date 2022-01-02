import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from '../../css/Layout.module.css';
import Filters from "../Filters";
import Excursions from "../Excursions";


const Layout = ({ children }) => {

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
                <div class="form-group">
                  <input placeholder="Busca una excursión" type="search"  class="form-control"/>
                </div>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ml-auto"><Link to="register">Regístrate</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to="login">Inicia sesión</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to="user">Usuario</Link></Nav.Link>
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