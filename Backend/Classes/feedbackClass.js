// feedback class by sui

class Feedback {
    
    /**
     * 
     */
    constructor(stars, content, mechanicId, customerId, date) {
        this.stars = stars;
        this.content = content;
        this.mechanicId = mechanicId;
        this.customerId = customerId;
        this.date = new Date();
        this.date = date;
    }
}