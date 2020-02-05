require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cookieparser = require('cookie-parser');
const bcryptjs = require('bcryptjs');
const Dbserver = "mongodb://localhost:27017/";
const jwt=require('jsonwebtoken');
const baerertoken=require('express-bearer-token');
var app = express();
const body = require('body-parser');
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//all app.use() section 
app.use(express.json());
app.use(cookieparser());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(baerertoken());
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//connect to the db
MongoClient.connect(Dbserver, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, db) {
    let dbb = db.db('User');
    if (err) throw err;
    console.log("Database Connected Successfully!!!!!!!");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

    //Write database Insert here...
    app.post('/subscribe',(req, res) => {
       //object with the data 
        let obj = {
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            email: req.body.email,
            phone: req.body.telephoneNumber,
            password: req.body.password //hash
        }
        // res.json({Token_secret:Token_secret})

        //insert into DB
       
        dbb.collection('Friends').insertOne(obj, function (err, res, req) {

            if (err) return res.sendStatus(404);
        })
        
        //set cookies
        let options = {
            maxAge: 1000 * 60 * 15, // would expire after 15 minutes
            httpOnly: true, // The cookie only accessible by the web server
            signed: false // Indicates if the cookie should be signed
        }
        //creation of cookie
        res.cookie("user", username, options);
     
        


    })
    //get any data from the DB and matched with the form data inserted 
   
   
    app.post('/login', (req, res, err) => {
         //object with the data 
         let obj = {
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            email: req.body.email,
            phone: req.body.telephoneNumber,
            password: req.body.password //hash
        }
            // db 
                if (dbb.collection('Friends').find({ email: { $eq: req.body.email} , telephoneNumber:{$eq: req.body.telephoneNumber }, password:{$eq: req.body.password }})) {
                    //hash+salt for the user password
                 salt = bcryptjs.genSaltSync(10),
                hash = bcryptjs.hashSync(req.body.password, salt),
                console.log(hash);          
        } 
        else {return console.log(err);
        }
     
        
        //Token  
        const username=req.body.name;
         const user={name:username};
         let Token_secret=generateToken(user);
        //  res.json({Token_secret});
        console.log(Token_secret);
        res.json(Token_secret);
         //show the cookie
        res.send(req.cookies);
})
})
app.listen(4000)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//functions 
//generate token with jwt
 function generateToken(user) {
    return jwt.sign(user,process.env.SECRET_TOKEN,{expiresIn:'1m'});
}
//authentification token 
// async function authenticateToken(req, res, next) {
//     try {
//         const decode = await jwt.verify(req.token,process.env.SECRET_TOKEN);
//         const user = decode.username;
//         next(user) 
//     } catch (err) {
//         console.log(err)
//         res.json({
//             confirmation: "access denied",
//             message: "Invalid Token"
//         })
//     }
// }


