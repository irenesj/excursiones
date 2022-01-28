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

export function validatePassword(password){
    const validPassword = / /;

    return validPassword.test(password);
}