function validator(password) {

    return password.length >= 8 && /[a-zA-Z]/g.test(password) && /[0-9]/g.test(password);
}

export default validator;