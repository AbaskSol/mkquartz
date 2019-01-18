var express = require('express');
var router = express.Router();
// var algorithm = 'aes-256-cbc';
// var key = crypto.randomBytes(32);
// var iv = crypto.randomBytes(16);
var session = require('express-session');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'mkquartz',
  user     : 'root',
  password : 'mysql',
});
// var connection = mysql.createConnection({
//     host     : 'aa1upa5smcobczo.cjih6vzbpopo.us-east-2.rds.amazonaws.com',
//     database : 'mkquartz',
//     user     : 'mkqadmin',
//     password : 'Gobblego01',
// });
// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});
router.use(session({
  secret:'hg13at111edfbas1ah1u123s130i',
  resave: false
}));
//######### GET Homepage #########
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

//######### GET Product, Category List #########
router.get('/api/v1/getProductList' ,(req, response, next) =>{
  const results = [];
  connection.query('SELECT * FROM product', function (error, res, fields) {
    if (error)
      throw error;
    return response.json(res)
  });
})

router.get('/api/v1/getCategoryList' ,(req, response, next) =>{
  const results = [];
  connection.query('SELECT Distinct category FROM product', function (error, res, fields) {
    if (error)
      throw error;
    return response.json(res)
  });

})

//######### POST Product #########
router.post('/api/v1/createProduct' ,(req, res, next) =>{
  const results =[];
  var sql = "INSERT INTO product (productId,productName,categories,imagePath,color,price) values ("+req.body.productId+",'"+req.body.productName+"','"+req.body.categories+"','"+req.body.imagePath+"','"+req.body.color+"',"+req.body.price+")";
  //, productName, categories, imagePath, color, price) VALUES ("+
  //  req.body.productId) //,req.body.productName,req.body.categories,req.body.imagePath, req.body.color,req.body.price+")";
            
            
            // var sql = "INSERT INTO product (productId, productName, categories, imagePath, color, price) VALUES (%"
            // +req.body.productId+"%,%"+req.body.productName+"%,%"+req.body.categories+"%,%"+req.body.imagePath+"%,%"
            // +req.body.color+"%,%"+req.body.price+"%)";
  console.log(sql);
  connection.query(sql, function (error, result, fields) {
    if (error) {
      return res.json({status : "N"})
    }      
    return res.json({status : "Y"})
  });
  connection.end(); 

})

//######### DELETE Product #########
router.delete('/api/v1/deleteProduct/:productId' ,(req, res, next) =>{
  const results =[];
  console.log(req.params)
  var sql = "DELETE FROM product WHERE productId = "+req.params.productId;
  connection.query(sql, function (error, result) {
    if (error) throw error;
    console.log("Number of records deleted: " + result.affectedRows);
    return res.json({status : "Y"})    
  });

})
var sessionob;
//######### Login User REQ Handler #########
router.post('/loginuser', function(req, res){
  console.log(req.body);
  connection.query(`SELECT * FROM users WHERE userid = '${req.body.userid}'`, (err, result) => {
    if(err){
      console.log('No user found');
    }
    else {
      var details = JSON.parse(JSON.stringify(result));
      req.session.sid = req.sessionID;
      req.session.user = details[0].userid;
      req.session.role = details[0].role;
      sessionob = req.session;
      if(req.body.password == details[0].password) {
        res.json({status:"Y",sessionob:sessionob});        
        console.log('loggedin');
      }
      else{
        res.json({status:"N",sessionob:null});
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

module.exports = router;
