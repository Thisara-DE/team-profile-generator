module.exports = teamData => {
    // data from index.js
    // console.log("Data from index.js", teamData);

    // destructure team data by section
    const [manager, ...team] = teamData;

    console.log([manager]);
}