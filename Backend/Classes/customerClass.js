// customer class by sui

// const e = require("express")

class Customer extends User {
    

    constructor(accountId, password, name, email, customerID, phoneNumber, vehicle) {
        super(accountId,password,name,email);
        this.customerID = customerID
        this.phoneNumber = phoneNumber
        this.ownedVehicles = [];
        this.ownedVehicles.push(vehicle);

    }

    get customerID() {
        return this.customerID;
    }

    set customerID(customerID) {
        if (typeof(customerID) == typeof(this.customerID)) {
            this.customerID = customerID;
        }
    }

    get phoneNumber() {
        return this.phoneNumber;
    }

    set phoneNumber(accountId) {
        if (typeof(accountId) == typeof(this.phoneNumber)) {
            this.phoneNumber = accountId;
        }
    }

    get ownedVehicles() {
        return this.ownedVehicles;
    }

    addVehcile (vehicle) {
        if (typeof(vehicle) == "Vehcile") {
            this.ownedVehicles.push(vehicle);
        }
    }

    // scheculeService() {

    // }

    // viewServiceHistory() {

    // }

    // leaveFeedback(message){

    // }

}