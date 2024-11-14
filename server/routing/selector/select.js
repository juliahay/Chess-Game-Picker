const db = require("../../db")

module.exports = (req, res) => {
    //selecting random problem based off of difficultly selected
    const data = db.getData("/").then((data) => {
        //must do all sending/editing/etc of data here
        //db.getData returns a Promise, but we use .then() to handle the data as an object

        //difficulty types
        // 1 - mate in one, 2 - mate in two, 3 - mate in three, 0 - any type
        let type =  0 //req.params.type
        let problem = 0;
        
        if (type == 0) {
            // 1 - 4462
            randomPick(1, 4462, data);
            
        } else if (type == 1) {
            // 1 - 306
            randomPick(1, 306, data);
            
        } else if (type == 2) {
            // 307 - 3718
            randomPick(307, 3718, data);

        } else if (type == 3) {
            // 3719 - 4462
            randomPick(3719, 4462, data);
        } 
        
        if (problem == 0) {
            console.log("Error: problem not found")
            return;
        } else {
            //send problem to client
        }
        console.log(problem)
    })

    return;
}

function randomPick(min, max, data) {
    let problem = 0;
    do {
        problem = Math.floor(Math.random() * (max - min + 1) ) + min
    } while (false) //check if problem in data
    
    return problem;
}
