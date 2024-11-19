const db = require("../../db")

module.exports = (req, res) => {
    //putting solved problems in database
    var data;
    let difficulty;

    //req params return problem number
    let problem = parseInt(req.params.problem)
    //req query returns if problem solved 
    let solved = req.query.solved
    console.log(problem, solved)

    if (solved === "true") {
        if (problem >= 1 && problem <= 306) {
            difficulty = "/mateInOne" 
        } else if (problem >= 307 && problem <= 3718) {
            difficulty = "/mateInTwo"
        } else if (problem >= 3719 && problem <= 4462) {
            difficulty = "/mateInThree"
        }

        data = db.getData(difficulty).then((data) => {
            if (data.includes(problem)) {
                return res.end("Problem already solved")
            }

            for (let i = 0; i < data.length; i++) {
                if (problem < data[i]) {
                    data.splice(i, 0, problem)
                    break;
                } else if (i == data.length - 1) {
                    data.push(problem)
                    break;
                }
            }
    
            if(data.length == 0) {
                data.push(problem)
            }

            console.log(difficulty, data)
            db.push(difficulty, data)
        })

        res.status(200).json({message: `Problem #${problem} solved`})
        return;
    } 
    
    res.status(200).json({message: `Problem #${problem} not solved`})
    return;
}