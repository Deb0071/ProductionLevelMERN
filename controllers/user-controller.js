const randomuser = require('../utils/random-user');

module.exports.usercontroller = (req, res) => {
    console.log(randomuser());
    res.send(req.randomNumber.toString());
}