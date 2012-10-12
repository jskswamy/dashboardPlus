var template = require("../models/template");

exports.create = function(req, res){
	Template.create({
		content: req.param('content', null)
	}).success(function(task){
		console.log("created content");
	});  
	return res.json({
		message: "Got your content"
	});
};