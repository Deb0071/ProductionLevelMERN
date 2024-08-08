module.exports = (req, res, next) => {
    req.randomNumber=Math.random();
    next();
};