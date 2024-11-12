// manager class by sui

class Manager extends User {

    constructor(accountId, password, name, email, managerId) {
        super(accountId, password, name, email);
        this.managerId = managerId;
    }

    get managerId() {
        return this.managerId;
    }

    set managerId(managerId) {
        if (typeof(managerId) == typeof(this.managerId)) {
            this.managerId = managerId;
        }
    }

    // viewPerformanceMetrics(Date d1, Date d2)

    //     generateReports(String entity) : void
    //  assignService(int serviceID, int mechanicID) : void
    // }
}