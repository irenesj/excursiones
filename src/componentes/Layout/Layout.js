import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from '../../css/Layout.module.css';


const Layout = ({ children }) => {

    return(
      <Container>
        <Row className={styles.nav}>
          <Col xs="12" md="7">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home">***</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="">Regístrate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="">Inicia sesión</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className={styles.searchBar} md="5">
            <div class="form-group">
              <input placeholder="Busca el sitio al que quieres ir..." type="search"  class="form-control"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <main>{children}</main>
          </Col>
        </Row>
        <Row className={styles.footer}>
          <Col xs="12">
            <p>Este es el footer</p>
          </Col>
        </Row>
        </Container>
     
    )
}

export default Layout;