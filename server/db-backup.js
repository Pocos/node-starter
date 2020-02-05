require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cookieparser = require('cookie-parser');
const bcryptjs = require('bcryptjs');
const Dbserver = "mongodb://localhost:27017/";
const jwt = require('jsonwebtoken');
const Cookies=require('cookies');
const cors = require("cors");
const baerertoken = require('express-bearer-token');
var app = express();
const body = require('body-parser');
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//all app.use() section 
app.use(express.json());
app.use(cors({credentials: true}));
app.use(cookieparser());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(baerertoken());

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//connect to the db
MongoClient.connect(Dbserver, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
    const dbb = db.db('ShareMatch');
    if (err) throw err;
    console.log("Database Connected Successfully!!!!!!!");

    app.get('/test', (req,res) => {
        console.log(req.cookies);
        res.end();
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Write database Insert here...
    app.post('/register', (req, res) => {
        const username = req.body.name;
        const user = { user: username }
        let token = generateToken(user);
        let options = {
            maxAge: 1000 * 240 * 15, // would expire after 15 minutes
            httpOnly: false, // The cookie only accessible by the web server
            signed: false, // Indicates if the cookie should be signed
        }

        let hash = bcryptjs.hashSync(req.body.password);
        //insert into DB
        return new Promise((resolve, reject) => {
            dbb.collection('User').insertOne(({
                name: req.body.name,
                surname: req.body.surname,
                age: req.body.age,
                email: req.body.email,
                phone: req.body.telephoneNumber,
                password: hash
            })), (err) => {

                if (err) {
                    reject(err);
                    return res.sendStatus(404);
                }
            }
        //     var cookies=new Cookies(req,res)
        //     cookies.set('user',token,options)
        //    cookies.get('user', options)
        //   resolve(res.cookie(res.cookies.user))
             resolve(res.cookie('user', token, options));
            res.sendStatus(200).end()
            
        })
    })
    //get any data from the DB and matched with the form data inserted 
    app.post('/login', async (req, res) => {
        //query for search in the db any data
        var query = { email: req.body.email };
        const user = await dbb.collection('User').findOne(query);
        if(bcryptjs.compareSync(req.body.password, user.password)){
            // Password match
            let token = generateToken(user);
            let options = {
                maxAge: 1000 * 240 * 15, // would expire after 15 minutes
                httpOnly: false, // The cookie only accessible by the web server
                signed: false, // Indicates if the cookie should be signed
            }
            res.cookie('user', token, options).status(200).end();

        }else{
            res.status(401).end();
        }
/*
        then((resolve, reject) => {
            if (resolve) {
                bcryptjs.compareSync(req.body.password, resolve.password)
                // show all cookie
                return req.cookies.user, res.sendStatus(200).end()
            }
            else {
                res.sendStatus(401).end();
            }
        })*/
    })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//functions
//generate token with jwt
function generateToken(user) {
    return jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: '3h' });
}
app.listen(3000)




