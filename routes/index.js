var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require('fs'); //文件模块
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/getData",(req,res,next)=>{
  let fileName = req.query.fileName;
  let file = path.join(__dirname,`../public/json/${fileName}`);
  fs.readFile(file,'utf-8',function(err,data){
    if (err) {
      res.json('文件读取失败');
    } else {
      res.json(JSON.parse(data));
      res.end();
    }
  });
})
router.post('/getData',(req,res,next)=>{
  let fileName = req.body.fileName;
  let file = path.join(__dirname,`../public/json/${fileName}`);
  fs.readFile(file,'utf-8',function(err,data){
    if (err) {
      res.json('文件读取失败');
    } else {
      res.json(JSON.parse(data));
      res.end();
    }
  });
})

module.exports = router;
