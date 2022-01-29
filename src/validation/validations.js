export function validateName(name) {
    return name.trim() !== "";
}

export function validateSurname(surname){
    return surname.trim() !== "";
}

export function validatePhone(phone){
    const validPhone = /^([(][+]?34[)])?\s?(?:6\d|7[1-9])\d(-|\s)?\d{3}(-|\s)?\d{3}$/;

    return validPhone.test(phone);
}

export function validateMail(mail){
    const validMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return validMail.test(mail);
}

/* Password with at least eight characters, one number and one letter*/
export function validatePassword(password){
    const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return validPassword.test(password);
}

export function validSamePassword(password, samePassword){

    const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return validPassword.test(samePassword) && password === samePassword;
}