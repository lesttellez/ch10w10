const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }

    getOfficeNumber () {
        return this.officeNumber
    }

}

module.exports = Manager; 