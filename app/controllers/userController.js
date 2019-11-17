'use strict';

var User = require('../models/userModel.js');

exports.loginC = function(req, res) {
	 var user_data = new User(req.body);
  User.loginM(user_data, function(err, user) {
    if (err){
		res.send(err);
	} else{
		if(user.length>0){
			var jsonData = {
				"status":"1",
				"status_code":"201",
				"msg":"login successfully done",
				"login_data":user[0]
			 };
		} else{
		

			var jsonData = {
				"status":"0",
				"status_code":"404",
				"msg":"User not found",
				"login_data":null
			 };
		}
		 
		 res.json(jsonData);
	}
      
   
  });
};



