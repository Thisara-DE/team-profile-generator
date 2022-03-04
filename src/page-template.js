const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateManager(managerObj) {
  if (!managerObj) {
    return "";
  }
  const manager = new Manager(
    managerObj.managerName,
    managerObj.managerId,
    managerObj.managerEmail,
    managerObj.managerOffice
  );

  return `
    <div class="column is-one-quarter  is-ancestor">
        <article class="tile is-child notification is-info">
        <p class="title has-text-centered">${manager.getName()}</p>
        <p class="subtitle has-text-centered"><i class="fa-solid fa-mug-hot"></i>  ${manager.getRole()}</p>
        <figure class="tile is-parent is-vertical">
            <article class="tile is-child box is-12">
                <p class="title is-size-6">ID: ${manager.getId()} </p>                        
            </article>
            <article class="tile is-child box">
                <p class="title is-size-6">Email: <a href="mailto: ${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></p>                        
            </article>
            <article class="tile is-child box">
                <p class="title is-size-6">Office number: ${
                  manager.officeNumber
                }</p>                        
            </article>                    
        </figure>
        </article>
    </div>
    `;
}



function generateTeam(teamArr) {
  return`
  ${teamArr.filter(employee => employee.employeeType === 'Engineer').map(({empName, empId, empEmail, engGithub}) => {

      const engineer = new Engineer(empName, empId, empEmail, engGithub);

      return`
      <div class="column is-one-quarter is-ancestor">
          <article class="tile is-child notification is-info">
          <p class="title has-text-centered">${engineer.getName()}</p>
          <p class="subtitle has-text-centered"><i class="fa-solid fa-glasses"></i>  ${engineer.getRole()}</p>
          <figure class="tile is-parent is-vertical">
              <article class="tile is-child box is-12">
                  <p class="title is-size-6">ID: ${engineer.getId()}</p>
              </article>
              <article class="tile is-child box">
                <p class="title is-size-6">Email: <a href="mailto: ${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></p>
              </article>
              <article class="tile is-child box">
              <p class="title is-size-6">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
              </article>
          </figure>
          </article>
      </div>
      `;
    })
    .join('')}

    ${teamArr.filter(employee => employee.employeeType === 'Intern').map(({empName, empId, empEmail, internSchool}) => {

        const intern = new Intern(empName, empId, empEmail, internSchool);
  
        return`
        <div class="column is-one-quarter is-ancestor">
            <article class="tile is-child notification is-info">
            <p class="title has-text-centered">${intern.getName()}</p>
            <p class="subtitle has-text-centered"><i class="fa-solid fa-glasses"></i>  ${intern.getRole()}</p>
            <figure class="tile is-parent is-vertical">
                <article class="tile is-child box is-12">
                    <p class="title is-size-6">ID: ${intern.getId()}</p>
                </article>
                <article class="tile is-child box">
                    <p class="title is-size-6">Email: <a href="mailto: ${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></p>
                </article>
                <article class="tile is-child box">
                    <p class="title is-size-6">School: ${intern.getSchool()}</p>
                </article>
            </figure>
            </article>
        </div>
        `;
        })
        .join('')}

  `;
}

module.exports = (teamData) => {
  // destructure team data by section
  const [manager, ...team] = teamData;  

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Dream Team</title>    
    </head>
    <body>
        <header class="hero is-danger is-link">
            <div class="hero-body has-text-centered">
                <p class="title is-size-1">
                My Team
                </p>
                <p class="subtitle">
                TEAMWORK <em>makes the</em> DREAM Work!
                </p>
            </div>
        </header>
        <section class="columns is-centered flex-wrap: wrap">
            <div class="column is-four-fifths is-flex is-flex-wrap-wrap is-justify-content-center">            
                ${generateManager(manager)}
                ${generateTeam(team)}             
                
                
                            
            </div>        
        </section>
    </body>
    </html>
    `;
};
