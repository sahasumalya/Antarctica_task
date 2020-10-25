exports.userQuery = function(userModel, search_object, order_object)
{
    return new Promise((resolve,reject)=>{
        userModel.find(search_object)
        .sort(order_object)
        .select({fname:1,lname:1,employeeID:1,email:1,orgName:1})
        .exec((err,docs)=>{
                if(!err && docs!=null && docs!=undefined)
                { 
                    resolve(docs);
                }
                else
                    reject("Not found");
                
        })

    });
        
    
}