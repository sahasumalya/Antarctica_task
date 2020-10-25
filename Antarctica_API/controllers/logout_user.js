const {delRedisValue} = require('../utilities/redis_functions.js');


function session_destroy(session)
{
    return new Promise((resolve,reject)=>{
        session.destroy((er)=>{
            if(!er)
            {
                console.log("Session destroyed");
                resolve("Ok");
            }
            else
            {
                cossole.log("error "+er);
                reject("Session cant destroy");
            }
        })
    })
}

exports.logout_user = function(session_id,redisClient,session)
{
    return new Promise((resolve,reject)=>{
        delRedisValue(session_id, redisClient).then((resp)=>{
            console.log(resp);
            return session_destroy(session);
            })
            .then((r)=>{
                console.log("r "+r);
                resolve(r);
            })
            .catch((er)=>{
                reject(er);
            })
    })
    
    
}