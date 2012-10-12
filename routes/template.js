var template = require("../models/template");

exports.findOrCreate = function(req, res){	
	Template.find({
		where: {id: 1}		
	}).success(function(template){
		if(template){
			template.updateAttributes({
				content: req.param("content", null)
			});
		}else{
			Template.create({content: req.param("content", null)});	
		}		
	}).error(function(data){
		console.log("Faced an error" + data);		
	});	
	return res.json({
		message: "Got your content"
	});
};

exports.index = function(req, res){
	var template_data;
	return Template.all().success(function(template_data){
		return res.send(template_data[0].content);	
	});

}
