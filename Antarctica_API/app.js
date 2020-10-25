const express = require('express');
const session = require('express-session');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const {redisClient, userModel} = require('./models/db_connections.js');
const {delRedisValue} = require('./utilities/redis_functions.js');

let session_object = {
	cookie: { path: '/', httpOnly: true, secure: false, maxAge: 300000 },
	secret : process.env.SESSION_SECRET || "My demo secret",
	resave : false,
    name : "mycookie",
    callback : (old_session_id)=>{
        delRedisValue(old_session_id, redisClient);
    }
};

app.use(session(session_object));
app.use(helmet);


const router_search = require('./routes/search_route.js').route(userModel, redisClient);
const router_login =  require('./routes/login_route.js').route(userModel, redisClient);
const router_register = require('./routes/register_route.js').route(userModel, redisClient);
const route_logout = require('./routes/logout_route.js').route(redisClient);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register_user', router_register);
app.use('/login_user', router_login);
app.use('/search_user', router_search);
app.use('/logout_user', route_logout);

app.get("/",(req,res)=>{
    res.send("Welcome to Employee Records API");
})

//error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: {}
	});
});


app.listen(port,()=>console.log("server started at "+port));
