'use strict';
//var os = require('os');
var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

	// function isLoggedIn (req, res, next) {
	// 	if (req.isAuthenticated()) {
	// 		return next();
	// 	} else {
	// 		res.redirect('/login');
	// 	}
	// }

	// var clickHandler = new ClickHandler();

	app.route('/')
		.get(function (req, res) {
			//res.sendFile(path + '/public/index.html');
			//console.log(os.platform()); 
			var info = req.headers['user-agent'];
			if (info.indexOf("Windows") > -1){
				var os = info.slice(info.indexOf("Windows"), info.indexOf(")")); 	
			}
			if (info.indexOf("Mac OS") > -1){
				var os = info.slice(info.indexOf("Mac OS"), info.indexOf(")")); 	
			}
			var ip = req.ip.slice(req.ip.lastIndexOf(":")+1);
			res.json({ ip: ip, language: req.acceptsLanguages(), system: os});
		});

	// app.route('/login')
	// 	.get(function (req, res) {
	// 		res.sendFile(path + '/public/login.html');
	// 	});

	// app.route('/logout')
	// 	.get(function (req, res) {
	// 		req.logout();
	// 		res.redirect('/login');
	// 	});

	// app.route('/profile')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.sendFile(path + '/public/profile.html');
	// 	});

	// app.route('/api/:id')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.json(req.user.github);
	// 	});

	// app.route('/auth/github')
	// 	.get(passport.authenticate('github'));

	// app.route('/auth/github/callback')
	// 	.get(passport.authenticate('github', {
	// 		successRedirect: '/',
	// 		failureRedirect: '/login'
	// 	}));

	// app.route('/api/:id/clicks')
	// 	.get(isLoggedIn, clickHandler.getClicks)
	// 	.post(isLoggedIn, clickHandler.addClick)
	// 	.delete(isLoggedIn, clickHandler.resetClicks);
};
