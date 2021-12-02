import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Figure} from 'react-bootstrap';


function Panel () {

    return(
        <div>
            <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>

        </div>
    );
}

export default Panel;