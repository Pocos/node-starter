require('dotenv').config();
const express = require('express');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const baerertoken = require('express-bearer-token');
var app = express();
const body = require('body-parser');
const Promise = require('promise');
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//all app.use() section 
app.use(express.json());
app.use(cookieparser());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(baerertoken());
////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Write database Insert here...
 module.exports=app.post('/subscribe', (req,res) => {
    const username=req.body.name;
    const user={user:username}
    let token=generateToken(user);
    let options = {
        maxAge: 1000 * 240 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        signed: false, // Indicates if the cookie should be signed
    }
    //hash+salt password
    let hash=bcrypt.hashSync(req.body.password)   
    
    //insert into DB
 return  new Promise((resolve,reject)=>{
     dbb.collection('User').insertOne(({
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.telephoneNumber,
    password: hash 
  })) , (err)=> {

        if (err){ 
            reject(err);
                         return res.sendStatus(404);
        }
    }


    resolve(res.cookie("user", token, options));

    res.send(200).end()

 })
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//functions
//generate token with jwt
function generateToken(user) {
    return jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: '10m' });
}   
