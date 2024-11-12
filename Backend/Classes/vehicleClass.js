// vehicle class by sui

class Vehcile extends User {
    /**
     * 
     */
    constructor(vehicleId, modelName, ownerId, vinNum, service, vehicleMileage) {
        this.vehicleId = vehicleId;
        this.modelName = modelName;
        this.ownerId = ownerId;
        this.vinNum = vinNum;
        this.seriveList = [];
        this.seriveList.push(service);
        this.vehicleMileage = vehicleMileage;
        
    }

    /**
     * 
     */
    get vehicleId() {
        return this.vehicleId;
    }

    /**
     * 
     */
    set vehicleId(vehicleId) {
        if (typeof(vehicleId) === vehicleId) {
            this.vehicleId = vehicleId;
        }
    }
}