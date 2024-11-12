// service class by sui

class Service {

    /**
     * 
     */
    constructor(serviceId, customerId, mechanicId, vechileId, serviceDate, status, serviceName, mechanicNote) {
        this.serviceId = serviceId;
        this.customerId = customerId;
        this.mechanicId = mechanicId;
        this.vechileId = vechileId;
        this.serviceDate =  new Date()
        this.serviceDate = serviceDate;
        this.status = status;
        this.serviceName = serviceName;
        this.mechanicNote = mechanicNote;
        
    }

    printServiceDetails() {
        console.log(this.serviceName);
        console.log(this.mechanicNote);
    }

    cancelAppointment() {
        this.status = "cancelled";
        return true;
    }

    // updateVehicleMileage(vechileId, mileage) {
    //     if(this.vechileId === vechileId) {
    //         this.m
    //     }
    // }


}