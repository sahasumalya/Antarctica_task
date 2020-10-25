function preparation(req,res,next){
    let parsed_queries = {};
    let fields = req.body;
    for (let items of Object.keys(fields))
        {
            
            switch(items)
            {
                case "email" : parsed_queries.email = fields.email.trim();
                    break;
                case "password" : parsed_queries.password = fields.password;
                    break;
                default : console.log("incorrect key");
            }
        }

        if(
           parsed_queries.email ==undefined || parsed_queries.email == null || parsed_queries.email == '' ||
           parsed_queries.password ==undefined || parsed_queries.password == null || parsed_queries.password == '' )
           
           res.send("Error in login keys");

        req.registries = parsed_queries;
        next();
        
                
    }

    
    
    exports.preparation = preparation;