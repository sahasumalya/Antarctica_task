const express = require('express');
const route_register = express.Router();

const {preparation} = require('../middlewares/registerPurify.js');
const {register_user} = require('../controllers/register_user.js');

exports.route = function(userModel, redisCLient)
{
    route_register.post('/',preparation, (req,res)=>{

        register_user(req.registries,userModel, req.session.id, redisCLient, (err,success)=>{
                if(err==null)
                    res.send("You are successfully registered: "+ JSON.stringify(success));
                else
                    res.send(JSON.stringify(err));
        });
    
    });

    return route_register;
}



