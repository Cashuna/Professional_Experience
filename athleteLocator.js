var inquirer = require("inquirer"), mysql = require("mysql");
var athletes = require("./athleticFunctions");



athletes.connection.connect(function(err){
    if (err){
        console.log("There was an error connecting, start your server.\nOr look here: " + err);
        athletes.connection.end();
    }
    else{
        console.log("Connected to the server.");
        inquirer.prompt([{
            type: "list",
            name: "select",
            message: "Please select the first option for results.",
            choices: ["View All Records", "Player Number", "Player Name", "Not Implemented"]
        }]).then(function (response){
            switch(response.select) {
                case "View All Records": {
                    athletes.viewRecords();
                    break;
                }
                case "Player Number": {
                    inquirer.prompt([{
                        type: "input",
                        name: "playerNum",
                        message: "Please enter player's number.",
                        default: 4
                    }]).then(function(input){
                        athletes.playerByNumber(input.playerNum);
                    });
                    break;
                }
                case "Player Name": {
                    inquirer.prompt([{
                        type: "input",
                        name: "playerName",
                        message: "Please enter player's first and last name.",
                        default: "Spud Webb"
                    }]).then(function(input){
                        athletes.playerByName(input.playerName);
                    });
                    break;
                }
                case "Not Implemented3": {
                    athletes.notImplemented();
                    break;
                }
                default:
            }
        });
    }
});