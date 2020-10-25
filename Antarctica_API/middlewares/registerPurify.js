// fname,lname, email, password, employeeID, orgName
function preparation(req,res,next){
    let parsed_queries = {};
    let fields = req.body;
    console.log(req.body);
    for (let items of Object.keys(fields))
        {
            
            switch(items)
            {
                case "fname" : parsed_queries.fname = fields.fname.trim();
                    break;
                case "lname"  : parsed_queries.lname = fields.lname.trim();
                    break;
                case "email" : parsed_queries.email = fields.email.trim();
                    break;
                case "password" : parsed_queries.password = fields.password;
                    break;
                case "orgName" : parsed_queries.orgName = fields.orgName.trim();
                    break;
                case "employeeID" : parsed_queries.employeeID = fields.employeeID.trim();
                    break;
                default : console.log("incorrect key" + items);
            }
        }

        if(parsed_queries.fname ==undefined || parsed_queries.fname == null || parsed_queries.fname == '' ||
           parsed_queries.lname ==undefined || parsed_queries.lname == null || parsed_queries.lname == '' ||
           parsed_queries.email ==undefined || parsed_queries.email == null || parsed_queries.email == '' ||
           parsed_queries.password ==undefined || parsed_queries.password == null || parsed_queries.password == '' ||
           parsed_queries.orgName ==undefined || parsed_queries.orgName == null || parsed_queries.orgName == '' ||
           parsed_queries.employeeID ==undefined || parsed_queries.employeeID == null || parsed_queries.employeeID == '')
           
           res.send("Error in register keys");
        else
        {
        req.registries = parsed_queries;
        next();
        }
        
                
    }

    
    
    exports.preparation = preparation;
    