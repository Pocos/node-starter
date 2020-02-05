//const db = require('../repository/auth');
const authService = require('../service/auth');

const schema = require('../schema/auth');
const celebrate = require('celebrate').celebrate;

function init(router){

    router.post('/auth/login', celebrate(schema.loginSchema), async (req,res) => {
        try{
            const token = await authService.authenticateUser(req.body);
            if(token){
                const options = {
                    maxAge: 1000 * 240 * 15, // would expire after 15 minutes
                    httpOnly: false, // The cookie only accessible by the web server
                    signed: false, // Indicates if the cookie should be signed
                }
                res.cookie('user', token, options).status(200).end();
            }else {
                res.status(401).end();
            }
        }catch(e){
            console.log(e);
            res.status(500).end();
        }
    });

    router.post('/auth/register',celebrate(schema.registerSchema),async(req,res)=>{
        const insert=await authService.registerUser(req.body);
        if(insert){
        res.status(200).end();
        }
        else{
            res.status(404).end();
        }
        
    })
}


    
    
    

module.exports = {
    init: init
};