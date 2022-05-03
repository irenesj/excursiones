
// promise
// respuesta del servidor -> se podria con async/await
const userLogin = (mail, password) => {

      // Variable that has the url that is needed for the fetch
      const url = 'http://localhost:3001/login';

      // Login object that we pass to the server for it to authenticate the user
      const credentials = {

          mail: mail,
          password: password
      }

      // Variable that saves the options that the fetch needs
      const options = {

          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)

      };

      return fetch(url, options)
      .then(response => {
        if (response.status === 401){
            throw new Error("Datos incorrectos. Inténtalo de nuevo.");
        }
        else{
            return response.json();
        }
    })

}

const registerUser = (name, surname, phone, mail,password) => {

    // Variable that has the url that is needed for the fetch
    const url = `http://localhost:3001/users`;
    // Variable that has a user with the information we have received from the register form, then this is sent to the server to add the user
    const user = {

        name: name,
        surname: surname,
        phone: phone,
        mail: mail,
        password: password
    }
    // Variable that saves the options that the fetch needs
    const options = {

        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(url, options )
    .then(response => {
        if (response.status === 409){
            throw new Error("No puedes registrarte con ese correo");
        }
        else{
            return response.json();
        }
        
    })

}

export { userLogin, registerUser };