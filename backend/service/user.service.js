const usermodel = require('../model/user.model')
const bcrypt = require('bcrypt')

module.exports.createuser = async ({
    name, password, phone, email, role
})=>{
    if(!name.firstname || !password || !phone || !email || !role){
        return 'invalid'
    }
    const hashpssword = await bcrypt.hash(password, 10)
    const user = await usermodel.create({
        name : name,
        phone: phone,
        email : email,
        password : hashpssword,
        role: role
    })
    return user
}