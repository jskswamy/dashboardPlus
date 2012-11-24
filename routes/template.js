var template = require("../models/template");

exports.index = function(req, res) {
	var template_data;
	return Template.find(1).success(function(template_data) {
		return res.send(template_data ? template_data.content : '');
	});

}