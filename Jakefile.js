var database = require("./config/database"),
	  sequelize = database.get_sequelize();


namespace('db', function(){
	desc("create database");
	task("create", function(param){
		return sequelize.sync()
		.success(function(){
			console.log("success");
		})
		.error(function(){
			console.log("error");
		});
	});
});