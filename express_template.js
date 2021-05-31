require('dotenv').config();  // use as sooner in the program as possible
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('http');
const ejs = require('ejs');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("");

//to use Ejs engine use this line below

 app.set("view engine", "ejs");

app.use(express.static("")); //enter the name of folder that u want to access publically


app.get("/",function(req,res){
    res.render('pageName',{varNameofEjsPage: 'value'});
   // res.sendFile(__dirname+"/index.html"); // incase of static html
});





app.listen(process.env.PORT || 300, function(){
    console.log("server has started at 300");
    });


    // npm i express body-parser ejs nodemon lodash mongoose-encryption dotenv
    //lodash helps to convert string to lowercase and replace - with space
    // mongoose-encytion uses AES
    //dotenv is used to make evironment variables to keep safe sensitve data like keys
    // or we can use md5 package for normal hashing 
    //bcryt can also be used
    // some packages we can use for authentication, cookies and sessions are as follows
    // - passport 
    // - passport-local
    // - passport-local-mongoose
    // - express-session  //make sure not to use sessions, it should be singular