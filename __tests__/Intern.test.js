const Intern = require('../lib/Intern');

describe('Creating Intern class, properties and methods', () => {
    test('creating Intern constructor function', () => {
        // Arrange
        // Acct
        const intern = new Intern('cam', 4, 'jim@gmail', 'scsu');
        // Assert
        expect(intern.school).toBe('scsu');
        
    })

    test('creating Intern getSchool method', () => {
        // Arrange
        // Acct
        const intern = new Intern('cam', 4, 'jim@gmail', 'scsu');
        // Assert
        expect(intern.getSchool()).toEqual(intern.school);
        
    })

    test('creating Intern getRole method', () => {
        // Arrange
        // Acct
        const intern = new Intern('cam', 4, 'jim@gmail', 'scsu');
        // Assert
        expect(intern.getRole()).toEqual('Intern');
        
    })
})