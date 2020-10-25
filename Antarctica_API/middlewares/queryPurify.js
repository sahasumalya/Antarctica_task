const querystring = require('querystring');

function preparation(req,res,next){
    let parsed_queries = {};
    parsed_queries.query = {};
    parsed_queries.orders = {};

    let fields = req.params.search_string;
    fields = querystring.parse(fields);
    console.log(fields);

    for (let items of Object.keys(fields))
        {
            
            switch(items)
            {
                case "fname" : 
                    let fname_input = fields.fname.trim().split('$');
                    if(fname_input.length>0 && fname_input[0]!="")
                        parsed_queries.query.fname = fname_input[0].trim();
                    if(fname_input.length>1 && (fname_input[1]=="1" || fname_input[1]=="-1"))
                        parsed_queries.orders.fname = fname_input[1];
                    break;
                case "lname"  :
                    let lname_input = fields.lname.trim().split('$');
                    if(lname_input.length>0 && lname_input[0]!="")
                        parsed_queries.query.lname = lname_input[0].trim();
                    if(lname_input.length>1 && (lname_input[1]=="1" || lname_input[1]=="-1"))
                        parsed_queries.orders.lname = lname_input[1];
                    break;
                case "employeeID" :
                    let employee_input = fields.employeeID.trim().split('$');
                    if(employee_input.length>0 && employee_input[0]!="")
                        parsed_queries.query.employeeID = employee_input[0].trim();
                    if(employee_input.length>1 && (employee_input[1]=="1" || employee_input[1]=="-1"))
                        parsed_queries.orders.employeeID = employee_input[1];
                    break;
                case "email" : parsed_queries.email = fields.email.trim();
                    let email_input = fields.email.trim().split('$');
                    if(email_input.length>1 && (email_input=="1" || email_input=="-1"))
                        parsed_queries.orders.email = email_input[1];
                    break;
                case "orgName" : 
                    let org_input = fields.orgName.trim().split('$');
                    if(org_input.length>1 && (org_input[1]=="1" || org_input[1]=="-1"))
                        parsed_queries.orders.orgName = org_input[1];
                    break;
               
                default : console.log("incorrect key");
            }
        }

        
        req.query_registries = parsed_queries.query;
        req.order_registries = parsed_queries.orders;

        next();
        
                
    }

    
    
    exports.preparation = preparation;