let express = require('express');
let url = require('url');
let qs = require('querystring');//解析参数的库
let http=require('http');
let router = express.Router();
let async = require("async");
let session = require('express-session');
router.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));
/* GET users listing. */
router.post('/', function(routeReq, routeRes, next) {
	let arg = routeReq.body;
	let pageUrl =  arg['page'];
	let method =  arg['method'] || 'POST';
	let pageObject = url.parse(pageUrl);
	delete arg['page'];
	delete arg['method'];
	pageObject.port = pageObject.port || 80;
	let postData = JSON.stringify(arg);
	// let postData = qs.stringify(arg);
	let path = "";
	let headers = {};
	if(method == "GET"){
		path = pageObject.pathname + "?" + qs.stringify(arg);
		headers = {
			'Content-Type': 'application/json;charset=utf-8'
		}
	}else{
		path = pageObject.pathname;
		headers = {
			// 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			'Content-Type': 'application/json;charset=utf-8',
			'Content-Length': Buffer.byteLength(postData)
		}
	}
	let options = {
		hostname: pageObject.hostname,
		port: pageObject.port,
		path:path,
		method: method,
		timeout:5000,
		headers: headers
	};
	let req = http.request(options, (res) => {
		console.log(`STATUS: ${res.statusCode}`);
		console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
		if(res.statusCode !== 200){
			let err = new Error();
			err.code = res.statusCode;
			next(err);
			return;
		}
		res.setEncoding('utf8');
		let aResData = [];
		res.on('data', (chunk) => {
			aResData.push(chunk);
		});
		res.on('end', () => {
			let resData = aResData.join("");
			routeRes.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
			let data = resData.toString();
			routeRes.end(data);
		});
	});
	req.on('timeout',function(){
		let err = new Error();
		err.code = "504";
		err.message = "请求超时:" + pageUrl;
		next(err);
		req.abort();
		return;
	});
	req.on('error', (e) => {
		next(e);
	});
	if(method == "POST"){
		// 写入数据到请求主体
		req.write(postData);
	}
	req.end();
});
module.exports = router;
