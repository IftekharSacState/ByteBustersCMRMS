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
        return this._accountId;
    }

    set accountId(accl)

    

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