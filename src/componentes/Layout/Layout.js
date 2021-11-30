import React from "react";
import { Nav } from "react-bootstrap";

/// props.children

const Layout =({children}) =>{

    return(
      <div>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home">Logo página</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">Regístrate</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">Inicia sesión</Nav.Link>
          </Nav.Item>
        </Nav>
  
        <main>{children}</main>
      </div>
    )
}

export default Layout;