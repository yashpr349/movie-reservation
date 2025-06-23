    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt')
    const jwt = require('jsonwebtoken')

    const userschema = new mongoose.Schema({
        name: {
            firstname: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
            }
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            required: true
        }
    })

    userschema.methods.genrateAuthToken = async function () {
        return await jwt.sign({_id: this._id}, process.env.JWTSECRET, {expiresIn: '1h'})
    }

    userschema.methods.comparePass = async function(password){
        return await bcrypt.compare(password, this.password)
    }

    const usermodel = mongoose.model('user', userschema)


    module.exports = usermodel;