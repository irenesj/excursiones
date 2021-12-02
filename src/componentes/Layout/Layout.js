import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from '../../css/Layout.module.css'

/// props.children

const Layout = ({ children }) => {

    return(
      <Container>
        <Row>
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
          <Col md="5">
            <div class="form-group">
              <input type="search"  class="form-control"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <main>{children}</main>
          </Col>
        </Row>
        <Row class="footer">
          <Col xs="12">
            <p>Es el footer</p>
          </Col>
        </Row>
        </Container>
     
    )
}

export default Layout;