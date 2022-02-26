const Engineer = require('../lib/Engineer');

describe('Creating Engineer class, properties and methods', () => {
    test('creating Engineer constructor function', () => {
        // Arrange
        // Acct
        const engineer = new Engineer('Jim', 2, 'jim@gmail', 'jimGh');
        // Assert
        expect(engineer.github).toBe('jimGh');
    })

    test('creating Engineer getGithub method', () => {
        // Arrange
        // Acct
        const engineer = new Engineer('Jim', 2, 'jim@gmail', 'jimGh');
        // Assert
        expect(engineer.getGithub()).toEqual(engineer.github);
    })

    test('creating Engineer getRole method', () => {
        // Arrange
        // Acct
        const engineer = new Engineer('Jim', 2, 'jim@gmail', 'jimGh');
        // Assert
        expect(engineer.getRole()).toEqual('Engineer');
    })
})