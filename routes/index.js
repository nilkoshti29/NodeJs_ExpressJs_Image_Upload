var express = require('express');
var router = express.Router();

var mysql = require('mysql');

//Db Connection Start

var connection  = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'my_db'
});

connection.connect(function(err){
  if(!err){
    console.log("Database connected");
  }else{
    console.log("Error connecting database")
  }
});


router.get('/',function(req,res,next){
  //
});

router.post('/',function(req,res){
  
  console.log(req.body);
  console.log(req.files.image_name.name);

  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  
  var myfile = req.files.image_name;
  var image_name1 = req.files.image_name.name;

  const mybodydata = {

    image_name: image_name1,
  }

  db.query("insert into image_upload_table set ?",mybodydata,function(err,result){
  
    if(err) throw err;
   
  });

   // Use the mv() method to place the file somewhere on your server
   myfile.mv("public/myuploads/"+image_name1, function(err) {
    if (err)
      return res.status(500).send(err);
      res.redirect('/add');
    
  });

});
module.exports = router;
