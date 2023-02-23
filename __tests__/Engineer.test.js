const Engineer = require('../lib/Engineer');
const engineer = new Engineer('John Doe', 123, 'test@email.com', 'johndoe');

describe('Engineer', () => {
  it('should create a new engineer object', () => {
    expect(engineer).toEqual({
      name: 'John Doe',
      id: 123,
      email: 'test@email.com',
      github: 'johndoe'
    });
  });

  it('should return the github username of the engineer', () => {
    expect(engineer.getGithub()).toBe('johndoe');
  });

  it('should return "Engineer" as the role of the engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
  
  it('should inherit the methods of Employee', () => {
    expect(engineer.getName()).toBe('John Doe');
    expect(engineer.getId()).toBe(123);
    expect(engineer.getEmail()).toBe('test@email.com');
  });
});