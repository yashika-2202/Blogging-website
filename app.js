//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));


app.get("/",function(req,res){
  res.render("home");
});
app.get("/about",function(req,res){
  res.render("about");
});
app.get("/contact",function(req,res){
  res.render("contact");
});
app.get("thankyou",function(req,res){
  const members={
    EMAIL:email,
    FNAME:fname,
    LNAME:lname
  };
});
app.post("thankyou",function(req,res){
  console.log(req.body.email,req.body.fname,res.body.lname);
});
app.post("/",function(req,res){
  console.log(req.body.name);
  res.render("thankyou");
});

app.post("/home",function(req,res){
  res.render("home");
});
app.listen(3000,function(){
  console.log("app started");
});


//a87e860574
