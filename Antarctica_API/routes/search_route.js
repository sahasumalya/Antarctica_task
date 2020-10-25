const express = require('express');
const search_route = express.Router();

const {preparation} = require('../middlewares/queryPurify.js');
const {query_controller} = require('../controllers/query_search.js');
const {checkAuthentication} = require('../middlewares/authentication.js');

exports.route = function(userModel, redisClient)
{
    //return query_specific results
    search_route.get('/:search_string', [checkAuthentication(redisClient), preparation], (req,res)=>{
        
        query_controller(req.query_registries, req.order_registries, userModel, (er,success)=>{
            if(er==null)
                res.json(success);
            else
               res.send(er);
        })

    })
    // return all results
    search_route.get('/', [checkAuthentication(redisClient)], (req,res)=>{
        query_controller({}, {}, userModel, (er,success)=>{
            if(er==null)
            {

                res.json(success);
            }
            else
               res.send(er);
        })

    })
    
    
    

    return search_route;
}