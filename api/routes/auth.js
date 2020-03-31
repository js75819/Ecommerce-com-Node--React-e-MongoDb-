const jwt = require("express-jwt")
const secret = require("../config").secret

function getTokenFromHeader(req){
    if(!req.headers.authorization) return null;
    const token = req.headers.authorization.split(" ")
    if(token[0] !== "Ecommerce") return null
    return token[1]
}

"Ecommerce mamammamamkmnikm.jikjkj.kkkkk"

const auth = {
    required: jwt({
        secret,
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),
    optional: jwt({
        secret,
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
}

module.exports = auth