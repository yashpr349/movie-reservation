const { validationResult } = require('express-validator')
const userservice = require('../service/user.service')
const usermodel = require('../model/user.model')

function isvalidrequest(req, res) {
    let error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
}

module.exports.userCreate = async (req, res)=>{
    isvalidrequest(req ,res)
    console.log('req.body', req.body)
    const {name, email, password, phone, role} = req.body
    if(!name || !email || !password || !phone || !role){
        return res.send('invalid credential')
    }
    const user = await userservice.createuser({
        name, password, phone, email, role
    })
    res.send(user)
}

module.exports.userLogin = async (req, res)=>{
    isvalidrequest(req ,res)
    const {email, password} = req.body
    const user = await usermodel.findOne({email}).select('+password')
    if(!user){
        return res.status(401).json({
            message: 'invalid email or password'
        })
    }
    const ismatch = await user.comparePass(password)
    if(!ismatch){
        res.send('invlid')
    }
    const token = await user.genrateAuthToken()
    res.send(token)
}