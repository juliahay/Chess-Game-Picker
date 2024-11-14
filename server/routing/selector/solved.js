const db = require("../../db")
const data = db.getData("/")

module.exports = (req, res) => {
    //putting solved problems in database
    console.log(data)
    
    return;
}