// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager.js

class Manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    getRole() {
      return 'Manager';
    }
  }
  
  module.exports = Manager;
  
