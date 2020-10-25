exports.userExists = function(userModel, email)
{
    return new Promise((resolve,reject)=>{
        userModel.findOne({email:email},(err,docs)=>{
            if(err || docs===undefined || docs==null || docs.password===undefined)
                reject("User not found");
            else
                resolve(docs);
        });
    })
}

exports.userNotExists = function(userModel, email)
{
    return new Promise((resolve,reject)=>{
        userModel.findOne({email:email},(err,docs)=>{
            if(err || docs===undefined || docs==null || docs.password===undefined)
                resolve("New User");
            else
                reject("User already exists");
        });
    })
}