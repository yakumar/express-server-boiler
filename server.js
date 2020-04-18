
const helmet = require('helmet')
const path = require('path');
const express = require("express");
const multer = require('multer');

const app = express();

const upload =  multer({dest:'public/images'});


app.use(helmet())

app.use(function(req, res, next){
  res.header("Access-control-Allow-Origin", "*"),
  res.header('Access-Control-Allow-Methods', 'HEAD', 'OPTIONS','DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
  })

// app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.set('view engine', 'ejs'); 
// app.set('views',path.join(__dirname, 'views'))




app.get("/", (req, res, next) => {

  // console.log(req);
  // console.log(res);



  res.render('index');
});

app.post('/uploadFile', upload.single('meme'),function(req, res, next){
  res.json(req.file);
})
app.listen(8080, () => {
  console.log("Server initialized");
});
