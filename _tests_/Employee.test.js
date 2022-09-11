const Employee = require("../lib/Employee");

describe ("Employee", () => {

    it("should return object", () => {
    const foo = new Employee();
    expect(typeof(foo)).toBe("object");
  });

    it("Testing name argument", () => {
    const name = "celeste";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});
    it("Testing id argument", () => {
    const testValue = 100;
    const emp = new Employee("celeste", testValue);
    expect(emp.id).toBe(testValue);
});
    it("Testing email argument", () => {
    const testValue = "test@test.com";
    const emp = new Employee("celeste", 123, testValue);
    expect(emp.email).toBe(testValue);
});
    it("Testing getName()", () => {
    const testValue = "celeste";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});
    it("Testing getId()", () => {
    const testValue = 100;
    const emp = new Employee("celeste", testValue);
    expect(emp.getId()).toBe(testValue);
});
    it("Testing getEmail()", () => {
    const testValue = "test@test.com";
    const emp = new Employee("celeste", 123, testValue);
    expect(emp.getEmail()).toBe(testValue);
});
    it("Testing getRole()", () => {
    const testValue = "Employee";
    const emp = new Employee("celeste", 123, "test@test.com");
    expect(emp.getRole()).toBe(testValue);
});

});




