let express = require('express');
let router = express.Router();
let session = require('express-session');
router.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));
/* GET users listing. */
router.post('/', function(routeReq, routeRes, next) {
	let arg = routeReq.body;
	routeRes.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
	let data = JSON.stringify(arg);
	routeRes.end(data);
});
module.exports = router;
