const express = require('express');
const logout_route = express.Router();
const {checkAuthentication} = require('../middlewares/authentication.js');
const {logout_user} = require('../controllers/logout_user.js');

exports.route = function(redisCLient)
{
    logout_route.get('/',checkAuthentication(redisCLient), (req,res)=>{

        logout_user(req.session.id, redisCLient, req.session).then(()=>{
            res.send("Successful Logout");
        })
        .catch((er)=>{
            res.send(JSON.stringify(er));
        })
    
    });

    return logout_route;
}
