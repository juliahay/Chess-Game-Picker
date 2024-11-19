const db = require("../../db")

module.exports = (req, res) => {
    //selecting random problem based off of difficultly selected

    const data = db.getData("/").then((data) => {
        //must do all sending/editing/etc of data here
        //db.getData returns a Promise, but we use .then() to handle the data as an object

        let problem;
        //difficulty types
        // 1 - mate in one, 2 - mate in two, 3 - mate in three, 0 - any type
        let type =  parseInt(req.query.type)
       
        if (type === 0) {
            // 1 - 4462
            problem = randomPick(1, 4462, data);
        } else if (type === 1) {
            // 1 - 306
            problem = randomPick(1, 306, data);
        } else if (type === 2) {
            // 307 - 3718
            problem = randomPick(307, 3718, data);
        } else if (type === 3) {
            // 3719 - 4462
            problem = randomPick(3719, 4462, data);
        } 
        
        if (problem == -1) {
            //all problems in this set solved
            res.status(200).json({message: "All problems in this set have been solved"})
        } else {
            //send problem
            res.status(200).json(problem)
        }
       
    })
    

    return;
}

function randomPick(min, max, data) {
    let problem;
    let dataset = data;
    if (data.length == (max - min + 1)) {
        //all problems have been used
        return -1;
    }

    //randomly pick, check not already picked
    do {
        problem = Math.floor(Math.random() * (max - min + 1) ) + min

        if (problem >= 1 && problem <= 306) {
            dataset = data.mateInOne;
        } else if (problem >= 307 && problem <= 3718) {
            dataset = data.mateInTwo;
        } else if (problem >= 3719 && problem <= 4462) {
            dataset = data.mateInThree;
        }
        
    } while (dataset.includes(problem)) //check if problem in data
    
    return problem;
}
