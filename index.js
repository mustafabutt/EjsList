var express = require('express');
var CircularJSON = require('circular-json');
// var ejs = require('ejs');
var app= express();

app.set('view engine', 'ejs');
app.use(express.static('views')); 

var router = express.Router();

router.get('/index/',function(err,res){
  res.render('index')
});

router.get('/index/a/:id',function(req,res){
  console.log(req.params.id)
  var arr=[]
  for(var i =1; i<=req.params.id; i++){
      arr.push('A'+i)
  }
  res.send(arr)
});

router.get('/index/b/:id',function(req,res){
  var arr=[]
  for(var i =1; i<=req.params.id; i++){
      arr.push('B'+i)
  }
  res.send(arr)
});

app.use('/',router)

app.listen(3000,function(){
  console.log('listening on port 3000');
})
