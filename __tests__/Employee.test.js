const Employee = require('../lib/Employee');

test('Testing name', () => {
    let e = new Employee('Test name');
    expect(e.name).toBe('Test name');
})