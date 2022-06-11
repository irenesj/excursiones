import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../slicers/loginSlice';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/Excursion.module.css';

function Excursion(props) {


    // This useSelector says if a user is logged in or not and it gives us the user info too
    const { login: isLoggedIn, user } = useSelector((state) => state.loginReducer);

    // Variable that we nedd to be able to use dispatchers
    const loginDispatch = useDispatch();

    // Variable that saves the mail of the current user
    const auxUserMail = user && user.mail;

    // Variable that has the url that is needed for the fetch
    const url = `http://localhost:3001/users/${auxUserMail}/excursions/${props.id}`;

    // This function sign ups a logged user in the excursion he/she wants
    const joinExcursion = () => {

        // Variable that saves the options that the fetch needs
        const options = {

            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage["token"]
            },
            body: JSON.stringify({ id: props.id })

        };

        fetch(url, options)
            .then(response => {

                if (response.status === 401) {
                    throw new Error("No estás autorizado/a para hacer esta operación");
                }
                else {
                    return response.json();
                }

            })
            .then(data => {

                loginDispatch(updateUser({

                    user: data

                }))
            })
            .catch(function (error) {

                console.log(error);

            })

    }

    // Variable that has the button that appears when the user isn´t still signed up in that excursion in concrete
    const BtnJoiningNojoined = <>

        <Button className={styles.btn} variant="success" type="button" onClick={joinExcursion}>
            Apuntarse
        </Button>

    </>

    // Variable that has the button that appears when the user is signed up in that excursion in concrete
    const BtnAlreadyJoined = <>

        <p className={styles.joinExcursionParagraph}>Apuntado/a</p>

    </>

    return (

        <Container className={styles.excursion}>

            <div className={styles.title}>{props.name}</div>
            <div className={styles.bold}>Zona:</div> {props.area}<br />
            <div className={styles.bold}>Dificultad:</div> {props.difficulty}<br />
            <div className={styles.bold}>Tiempo estimado:</div> {props.time}<br />
            <div className={styles.bold}>Descripción:</div> {props.description}<br />

            {isLoggedIn && user && !user.excursions.includes(props.id) && BtnJoiningNojoined}
            {isLoggedIn && user && user.excursions.includes(props.id) && BtnAlreadyJoined}

        </Container>

    );

}

export default Excursion;