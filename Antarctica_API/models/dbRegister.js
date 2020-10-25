exports.userRegisters = function(userModel, register_object)
{
    return new Promise((resolve,reject)=>{
        userModel.insertMany([register_object],(err,docs)=>{
            if(err || docs[0]===undefined || docs[0].password===undefined)
                reject("User can't regsiter");
            else
                resolve(docs);
        });
    })
}
