// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Brianna', 30);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Brianna', 30, 'brianna@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Brianna', 30, 'brianna@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Brianna', 30, 'brianna@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Brianna', 30, 'brianna@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});