const crypto = require('crypto');

module.exports = ()=>{
    let bytes =crypto.randomBytes(6);
    return bytes.toString('hex');
};