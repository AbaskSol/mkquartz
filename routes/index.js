var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'mkquartz',
    user     : 'root',
    password : 'mysql',
});
// var connection = mysql.createConnection({
//   host     : 'aa1upa5smcobczo.cjih6vzbpopo.us-east-2.rds.amazonaws.com',
//   database : 'mkquartz',
//   user     : 'mkqadmin',
//   password : 'Gobblego01',
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

module.exports = router;



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


