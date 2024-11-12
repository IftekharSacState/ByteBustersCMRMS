// user class.js
// made by Sui

class User {

    constructor(id, pass, name, email) {
        this.accountId = id;
        this.password = pass;
        this.email = email;
        this.name = name;
    }

    get accountId() {
        return this.accountId;
    }

    set accountId(accountId) {
        if (typeof(accountId) == typeof(this.accountId)) {
            this.accountId = accountId;
        }
    }

    get password() {
        return this.password;
    }

    set password(password) {
        if (typeof(password) == typeof(this.password)) {
            this.password = password;
        }
    }

    get email() {
        return this.email;
    }

    set email(email) {
        if (typeof(email) == typeof(this.email)) {
            this.email = this.email;
        }
    }

    get name() {
        return this.name;
    }

    set name(name) {
        if (typeof(name) == typeof(this.name)) {
            this.name = this.name;
        }
    }

    login(email, password) {
        return ((this.email === email) && (this.password === password));
    }

    //signup(String name, String email, String password) : boolean
     
    forgotPassword(email) {
        if (this.email === email) {
            //add logic to send email a confirmation number
            return true;
        } else {
            return false;
        }
    }


}