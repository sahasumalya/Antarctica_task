const {isLoggedIn} = require('../middlewares/authentication.js');
const {checkRegister} = require('../middlewares/register_check.js');
const {userRegisters} = require('../models/dbRegister.js');


// First Name, Last Name, Email ID, Password, a unique employeeID and Organization Name.
exports.register_user = function(registries, userModel,session_id,redisClient,cb)
{
    isLoggedIn(redisClient, session_id)

    .then(()=>{
        return checkRegister(userModel, registries.email, registries.password);
    })
    .then((resp)=>{
        console.log("resp "+resp);
        registries.password = resp;
        return userRegisters(userModel, registries);
        
    })
    .then(()=>{
        console.log("cb to be executed");
        cb(null,1);
    })
    .catch((er)=>{
        cb(er,0);
    });
    
}