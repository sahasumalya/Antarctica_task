const {getRedisValue} = require('../utilities/redis_functions.js');

exports.checkAuthentication = function (redisClient)
{
    return (req,res,next)=>{
        getRedisValue(req.session.id, redisClient).then((resp)=>{
            if(resp==='online')
                next();
            else
                res.send("Auth Failed/Not logged in")
        })
        .catch((err)=>{
            res.send(JSON.stringify(err.message));
        })
    }
}

exports.isLoggedIn = function (redisClient, session_id)
{
    return new Promise((resolve,reject)=>{
        getRedisValue(session_id, redisClient).then((resp)=>{
            if(resp==='online')
                reject("Already logged in");
            else
                resolve("1");
        })
        .catch((err)=>{
            reject(err);
        })
    })
}

