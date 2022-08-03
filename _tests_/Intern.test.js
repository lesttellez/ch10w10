// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Brianna', 30, 'brianna@gmail.com', 'PCC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Brianna', 30, 'brianna@gmail.com', 'PCC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Brianna', 30, 'brianna@gmail.com', 'PCC');

    expect(intern.getRole()).toEqual("Intern");
}); 