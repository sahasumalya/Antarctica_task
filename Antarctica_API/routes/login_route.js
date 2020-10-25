const express = require('express');
const login_route = express.Router();


const {preparation} = require('../middlewares/loginPurify.js');
const {login_user} =  require('../controllers/login_user.js');

exports.route = function(userModel, redisCLient)
{
    login_route.post('/',preparation, (req,res)=>{

        login_user(req.registries.email, req.registries.password, userModel, req.session.id, redisCLient, (err,success)=>{
                if(err==null)
                    res.send("You are successfully login: "+ JSON.stringify(success));
                else
                    res.send(JSON.stringify(err));
        });
    
    });

    return login_route;
}
