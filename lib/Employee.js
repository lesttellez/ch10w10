// employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name/ ID/ email/ role from input
    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }   

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 