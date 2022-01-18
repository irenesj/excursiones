import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap';
import styles from '../css/Filters.module.css';

function Filters(){

    return(
      
      <div>
        <ListGroup variant="flush">
        <ListGroup.Item className={styles.filters}>Cangas de Onís</ListGroup.Item>
          <ListGroup.Item className={styles.filters}>Picos de Europa</ListGroup.Item>
      </ListGroup>
      </div>
    
    );

}

export default Filters;