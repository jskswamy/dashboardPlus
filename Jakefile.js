var database = require("./config/database"),
    template = require("./models/template"),
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

	desc("Reset Tables");
	task("reset", function(params){
		console.log(params);
       return sequelize.sync({
       	force:true
       });
	});
});