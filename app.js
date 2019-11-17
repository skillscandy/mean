const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const users=require('./app/routes/approutes');
const app=express();
const config=require('./app/models/db');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect(config.database,()=>{
//     console.log("connected to the database");
// });


app.use(cors());
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('API server started on: ' + port);
});
    app.get('/',(req,res)=>{
    res.send("invalid url");
    });
app.use('/users',users);




