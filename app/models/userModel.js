const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('./db');
const MongoClient = require('mongodb').MongoClient;
const uri = config.database;
const client = new MongoClient(uri, {
     useNewUrlParser: true,
     useFindAndModify: true ,
     useCreateIndex: true ,
     useUnifiedTopology: true ,
      
    });
const userSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});
const User=module.exports=mongoose.model('User',userSchema);
module.exports.getUserById=function (id,callback){
  User.findById(id,callback);
}
module.exports.getUserByName=function (username,callback){
  const query={username:username};
  User.findOne(query,callback);
}
module.exports.adduser=function (newuser,callback){
  bcrypt.genSalt(10,(err,salt)=>{
bcrypt.hash(newuser.password,salt,(err,hash)=>{
  if(err) throw err;
  newuser.password=hash;
  client.connect((cn_err,cn_res)=> {
    const collection = client.db("mean").collection("users");
    if(cn_err){
      return cn_err;
    } else{
      collection.insertOne(newuser,(err,res)=>{
      if(err) return err;
         return res;
      });
      return cn_res;
    }
  });
});
  });
}