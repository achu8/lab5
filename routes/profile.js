var data = require("../data.json");

exports.viewProfile = function(req, res) {   
	console.log(data);
	var name = req.params.name;

	for (var i = 0; i < data.friends.length; i++) {
		if (data.friends[i].name == name) {
			res.render('profile', data.friends[i]);
 		}
	}	
}