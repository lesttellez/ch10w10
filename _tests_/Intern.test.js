const Intern = require("../lib/Intern");

test("Testing school argument", () => {
    const testValue = "South Mountain Community";
    const emp = new Intern("James", 2, "test@test.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("Testing officeNumber will return office number.", () => {
    const testValue = "School Name";
    const emp = new Intern("James", 2, "test@test.com", testSchool);
    expect(emp.getRole()).toBe(testValue);

test("Testing role.", () => {
    const testValue = "Intern";
    const emp = new Intern("James", 2, "test@test.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});