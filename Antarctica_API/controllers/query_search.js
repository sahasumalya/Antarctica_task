const {userQuery} = require('../models/dbQuery.js');

exports.query_controller = function(search_registry, order_registry, userModel, cb)
{
    userQuery(userModel, search_registry, order_registry).then((resp)=>{
        cb(null,resp);
    })
    .catch((er)=>{
        cb(er,null);
    })
}