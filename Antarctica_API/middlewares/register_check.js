const {userNotExists} = require('../models/dbuserCheck');
const bcrypt = require('bcrypt');

async function bcrypt_generate(plain_password)
{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(plain_password, 10, function(err, hash) {
            if(!err)
                resolve(hash);
            else
               reject("Cant hash "+ err);
        });
    })
}

exports.checkRegister = function(userModel, email, password)
{
    return new Promise((resolve,reject)=>{
        userNotExists(userModel, email).then((resp)=>{
            return bcrypt_generate(password);
        })
        .then((r)=>{
            resolve(r);
        })
        .catch((er)=>{
            reject(er);
        })
    });
}

