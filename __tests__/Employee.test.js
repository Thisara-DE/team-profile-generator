const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Creating Employee class, properties and methods', () => {

    test('creating employee constructor function', () => {
        // Arrange
        // Add
        const employee = new Employee('tim', 1, 'tim@gmail.com');
        // Assert
        expect(employee.name).toBe('tim');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('tim@gmail.com');
    })

    test('creating employee getName method', () => {
        // Arrange
        // Add
        const employee = new Employee('tim', 1, 'tim@gmail.com');
        // Assert
        expect(employee.getName()).toEqual(employee.name);

    })

    test('creating employee getId method', () => {
        // Arrange
        // Add
        const employee = new Employee('tim', 1, 'tim@gmail.com');
        // Assert
        expect(employee.getId()).toEqual(employee.id);
    })

    test('creating employee getEmail method', () => {
        // Arrange
        // Add
        const employee = new Employee('tim', 1, 'tim@gmail.com');
        // Assert
        expect(employee.getEmail()).toEqual(employee.email);
    })

    test('creating employee getRole method', () => {
        // Arrange
        // Add
        const employee = new Employee('tim', 1, 'tim@gmail.com');
        // Assert
        expect(employee.getRole()).toBe(employee.role);
    })
})