// In this we will know how to install package using npm and  run it and print the result 

var figlet = require("figlet");

figlet("SUNNY", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});


// This is a basic npm package.