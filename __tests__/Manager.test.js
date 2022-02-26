const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Creating Manager class, properties and methods', () => {
    test('creating Manager constructor function', () => {
        // Arrange
        // Acct
        const manager = new Manager('tim', 1, 'tim@gmail.com', 21);
        // Assert
        expect(manager.officeNumber).toBe(21);
    })

    test('creating Manager getRole method', () => {
        // Arrange
        // Acct
        const manager = new Manager('tim', 1, 'tim@gmail.com', 21);
        // Assert
        expect(manager.getRole()).toEqual('Manager');
    })
})


