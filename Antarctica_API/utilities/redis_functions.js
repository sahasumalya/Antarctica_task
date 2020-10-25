const  getRedisAsync = async function(item,redisClient)
{
	return new Promise((resolve,reject)=>{
		redisClient.get(item,(err,rep)=>{
			if(err )
				reject(err);
			else
				resolve(rep);
		});
	});
	
}

const  setRedisAsync = async function(key, value, redisClient)
{
	return new Promise((resolve,reject)=>{
		redisClient.set(key, value,(err)=>{
			if(err )
				reject(err);
			else
				resolve("Ok");
		});
	});
	
}

const delRedisAsync = async function(key, redisClient)
{
	return new Promise((resolve,reject)=>{
		redisClient.del(key,(err,resp)=>{
            if(err || resp!=1)
            {

                reject("Cant delete");
            }
            else
            {
                
                resolve("Ok");
            }
		});
	});
	
}

exports.delRedisValue = delRedisAsync;
exports.getRedisValue = getRedisAsync;
exports.setRedisValue = setRedisAsync;



