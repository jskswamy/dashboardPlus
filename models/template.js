var Sequelize = require("sequelize"),
		database = require("./config/database"),
	  sequelize = database.get_sequelize();

var template = sequelize.define("template", {
	title: Sequelize.STRING,
});