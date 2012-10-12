var Sequelize = require("sequelize"),
		database = require("../config/database"),
	  sequelize = database.get_sequelize();

Template = sequelize.define("template", {
	content: Sequelize.TEXT
});