const db = require("../../db")
const data = db.getData("/")

module.exports = (req, res) => {
    //putting solved problems in database

    //req params returns the problem number if solved
    //if solved = -1, not solved
    let solved = req.params.solved

    if (solved == -1) {
        //do nothing

    } else if (solved >= 1 && solved <= 306) {
        //add to "mate-in-one"
        
    } else if (solved >= 307 && solved <= 3718) {
        //add to "mate-in-two"
        
    } else if (solved >= 3719 && solved <= 4462) {
        //add to "mate-in-three"

    }
    
    return;
}