const Intern = require('../lib/Intern');
const intern = new Intern('John Doe', 123, 'test@email.com', 'UW');

describe('Intern', () => {
  it('should create a new intern object', () => {
    expect(intern).toEqual({
      name: 'John Doe',
      id: 123,
      email: 'test@email.com',
      school: 'UW'
    });
  });

  it('should return the school of the intern', () => {
    expect(intern.getSchool()).toBe('UW');
  });

  it('should return "Intern" as the role of the intern', () => {
    expect(intern.getRole()).toBe('Intern');
  });
  
  it('should inherit the methods of Employee', () => {
    expect(intern.getName()).toBe('John Doe');
    expect(intern.getId()).toBe(123);
    expect(intern.getEmail()).toBe('test@email.com');
  });
});