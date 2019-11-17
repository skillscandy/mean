const express=require('express');
const router=express.Router();
const User=require('../models/userModel');
const passport=require('passport');
const jwt=require('jsonwebtoken');

  router.get('/',(req,res,next)=>{
  res.send("invalid url");
  });

  router.post('/login',(req,res,next)=>{
  res.send("log in route");
  });

  router.get('/profile',(req,res,next)=>{
  res.send("profile");
  });

router.post('/register',(req,res,next)=>{
  res.send("register");
  let newUser=new User({
    name:req.body.name,
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
  });

 User.adduser(newUser,(err,user)=>{
  if(err){
  res.json(
    {
      success:false,
      msg:"failed to register",
      userdata:null
    }
  );
  } else{
    res.json(
      {
        success:true,
        msg:"Successfully registered",
        userdata:user
      }
    );
  }
    });

});

router.get('/authenticate',(req,res,next)=>{
  res.send("log in authenticate");
  });

module.exports =router; 