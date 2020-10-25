const redis = require('redis');
const mongoose = require('mongoose');
const {employeeSchema} = require('./dbSchema.js');

const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/mydb';

const redisClient = redis.createClient();

mongoose.connect(mongo_url,{useNewUrlParser: true});

mongoose.connection.once('open',(error)=>{
	if(error)
		console.log("error");
	else
		console.log("Db connected successfully");
});

redisClient.on('connect',()=>{
    console.log("Redis server connected");
})

const userModel = mongoose.model('employeeRecords', employeeSchema);

exports.mongodb = mongoose;
exports.redisClient = redisClient;
exports.userModel = userModel;

