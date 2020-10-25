const {setRedisValue} = require('../utilities/redis_functions.js');
const {checkLogin} = require('../middlewares/login_check.js');
const {isLoggedIn} = require('../middlewares/authentication.js');

exports.login_user = function(email,password,userModel,session_id,redisClient,cb)
{
    isLoggedIn(redisClient, session_id).then((r)=>{
        return checkLogin(userModel, email, password);
    })
    .then(()=>{
        return setRedisValue(session_id, "online", redisClient);
    })
    .then(()=>{
        cb(null,"Successful login");
    })
    .catch((er)=>{
        cb(er,0);
    });
    
}