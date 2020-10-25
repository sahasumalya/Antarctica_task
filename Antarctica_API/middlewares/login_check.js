const {userExists} = require('../models/dbuserCheck');
const bcrypt = require('bcrypt');

function bcrypt_check(plain_password, hash)
{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(plain_password, hash, function(err, result) {
           if(!err)
            resolve(result);
          else
            reject(err.message);
        });
    })
}

exports.checkLogin = function(userModel, email, password)
{
    return new Promise((resolve,reject)=>{
        userExists(userModel, email).then((resp)=>{
            return bcrypt_check(password, resp.password);
        })
        .then((r)=>{
            if(r==true)
                resolve("1");
            else
                reject("Password Does not Match");
        })
        .catch((e)=>{
            reject(e);
        })
    });
}

