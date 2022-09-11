const Manager = require("../lib/Manager");

test("Testing office number.", () => {
    const testValue = 2;
    const emp = new Manager("James", 2, "test@test.com", testValue);
    expect(emp.officeNumber).toBe(testValue);});

test("Testing officeNumber will return office number.", () => {
    const testValue = 2;
    const emp = new Manager("James", 2, "test@test.com", 10);
    expect(emp.officeNumber).toBe(testValue);});

test("Testing role.", () => {
    const testValue = "Manager";
    const emp = new Manager("James", 2, "test@test.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});
    