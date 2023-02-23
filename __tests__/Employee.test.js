const Employee = require('../lib/Employee');
const employee = new Employee('John Doe', 123, 'test@email.com');

describe('Employee', () => {
    it('should create a new employee object', () => {
      expect(employee).toEqual({
        name: 'John Doe',
        id: 123,
        email: 'test@email.com'
      });
    });
  
    it('should return the name of the employee', () => {
      expect(employee.getName()).toBe('John Doe');
    });
  
    it('should return the ID of the employee', () => {
      expect(employee.getId()).toBe(123);
    });
  
    it('should return the email of the employee', () => {
      expect(employee.getEmail()).toBe('test@email.com');
    });
  
    it('should return "Employee" as the role of the employee', () => {
      expect(employee.getRole()).toBe('Employee');
    });
  });
