const log4js = require("log4js");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const log = log4js.getLogger("app");

const getData = require("./routes/getData");
const apiTest = require("./routes/api-test");

const app = express();
app.use(compression());
// app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, "favicon.ico")));
// app.use(logger('dev'));

app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb", extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));


app.use("/json", getData);
app.use("/api", apiTest);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    if(req.headers.accept.match("image")){
        next();
        return;
    }
    let err = new Error("Not Found" + req.url);
    err.code = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    log.error("Something went wrong:", err);
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    //
    // // render the error page
    // res.status(err.status || 500);
    // res.render('error');
    res.writeHead(200, {"Content-Type": "application/json;charset=utf-8"});
    console.info(err);
    let resule = {
        status:err.code,
        msg:err.message,
    };
    res.end(JSON.stringify(resule));
});

module.exports = app;
