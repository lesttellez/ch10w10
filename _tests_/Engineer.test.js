const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testValue = "github";
    const emp = new Engineer("James", 2, "test.test.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("Testing getGithub will return github.", () => {
    const testValue = "github";
    const emp = new Engineer("James", 2, "test@test.com", "github");
    expect(emp.getRole()).toBe(testValue);
});

test("Testing role.", () => {
    const testValue = "github";
    const emp = new Engineer("James", 2, "test@test.com", testValue);
    expect(emp.getGithub()).toBe(testValue);
});