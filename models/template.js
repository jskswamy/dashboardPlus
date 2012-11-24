var Sequelize = require("sequelize"),
	database = require("../config/database"),
	sequelize = database.get_sequelize();

Template = sequelize.define("template", {
	content: Sequelize.TEXT
}, {
	classMethods: {
		findOrCreate: function(content) {
			Template.find({
				where: {
					id: 1
				}
			}).success(function(template) {
				if(template) {
					template.updateAttributes({
						content: content
					});
				} else {
					Template.create({
						content: content
					});
				}
			}).error(function(data) {
				console.log("Faced an error" + data);
			});
		}
	}
});