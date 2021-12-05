import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from '../../css/Layout.module.css';


const Layout = ({ children }) => {

    return(
      <Container>
        <Row className={styles.nav}>
          <Col xs="12" md="7">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home">Viajar Juntos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="">Regístrate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Inicia sesión</Nav.Link>
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
            <p>Copyright © 2022 Viajar Juntos. Todos los derechos reservados.</p>    
            <p><a href="mailto:viajarjuntos@gmail.com">Contacto</a></p>    
            <p>Redes sociales</p>
          </Col>
        </Row>
        </Container>
     
    )
}

export default Layout;