var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
/*var algorithm = 'aes-256-cbc';
var key = crypto.randomBytes(32);
var iv = crypto.randomBytes(16);*/

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'aa1upa5smcobczo.cjih6vzbpopo.us-east-2.rds.amazonaws.com',
//     database : 'mkquartz',
//     user     : 'mkqadmin',
//     password : 'Gobblego01',
// });
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'mkquartz',
  user     : 'root',
  password : 'mysql',
});
/*var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});*/

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'mkquartz')));

app.use('/', routes);
app.use('/users', users);

// login post request handler
app.post('/loginuser', function(req, res){
  console.log(req.body);
  connection.query(`SELECT * FROM users WHERE userid = '${req.body.userid}'`, (err, result) => {
    if(err){
      console.log('No user found');
    }
    else {
      var details = JSON.parse(JSON.stringify(result));
      if(req.body.password == details[0].password) {
        res.json({status:"Y"});        
        console.log('loggedin');
      }
      else{
        console.log('The password is incorrect..');
      }
    }
  })
})

/*
//encrypt function from crypto
function encrypt(text) {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
 }

 //decrypt function from crypto
 function decrypt(text) {
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
 }
*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
