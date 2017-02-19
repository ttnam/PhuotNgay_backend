require('../Model/UserDAO')();

module.exports = function(app, firebase) { 
    var userDAO = new UserDAO();
    var url = '/api/user';   

    app.post(url + '/login', function(req, res) {  
        userDAO.login(firebase, req.body.firebaseUid, req.body.fbId, req.body.email, function(result) {
            res.json(result); 
        });
    });

    app.post(url, function(req, res) {  
        // if (req.headers['authen'] == null) 
        //     return res.json({
		// 					responseCode : -1,
		// 					description : "",
		// 					data : ""
		// 				});
        userDAO.update(firebase, req.body.authen, req.body.email, req.body.firstName, req.body.lastName, 
            req.body.gender, req.body.avatar, req.body.dateOfBirth, function(result) {
            res.json(result); 
        });
    });
}