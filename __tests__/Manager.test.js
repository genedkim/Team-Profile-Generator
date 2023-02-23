const Manager = require('../lib/Manager');
const manager = new Manager('John Doe', 123, 'test@email.com', 300);

describe('Manager', () => {
  it('should create a new manager object', () => {
    expect(manager).toEqual({
      name: 'John Doe',
      id: 123,
      email: 'test@email.com',
      officeNumber: 300
    });
  });

  it('should return the office number of the manager', () => {
    expect(manager.getOfficeNumber()).toBe(300);
  });

  it('should return "Manager" as the role of the manager', () => {
    expect(manager.getRole()).toBe('Manager');
  });
  
  it('should inherit the methods of Employee', () => {
    expect(manager.getName()).toBe('John Doe');
    expect(manager.getId()).toBe(123);
    expect(manager.getEmail()).toBe('test@email.com');
  });
});