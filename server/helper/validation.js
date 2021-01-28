const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const x = function(name) {
    if (name === "" || name === null) {
        return true
    } else {
        return false
    }
}

Boolean(x)

function validateEmail(email){
    const reg = regex;
    if (x(email)) {
        return "Please fill in the email"
    } else if (!reg.test(email)) {
        return "Email provided is invalid"
    }
    return ""
};

export {
    validateEmail,
    x
}