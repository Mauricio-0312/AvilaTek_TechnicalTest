const jwt = require("jwt-simple");
const moment = require("moment");
// var User = require("../models/user");
const password = "09hHJY=encode-system-&/ISksjuj039";

exports.authenticate = (req, res, next) => {
     //Check token in the headers

    if(!req.headers.authorization){
        return res.status(408).send({
            message: "The token wasn't sent"
        });
    }

    var token = req.headers.authorization.replace(/['"]+/g, "");

    //Decode token
    try{
        var payload = jwt.decode(token, password);
        
        //Check if it's already expired
        if(payload.exp <= moment().unix()){
            return res.status(409).send({
                message: "The token is expired"
            });
        }

    }catch(ex){
        return res.status(410).send({
            message: "The token isn't valid"
        });
    }

    // User.findById(payload._id, (error, user) => {
    //     if(error || !user){
    //         return res.status(411).send({
    //             message: "User doesn't exist"
    //         });
    //     }

    //     if(user.deleted == true){
    //         return res.status(412).send({
    //             message: "This user was deleted"
    //         });
    //     }

    //     req.user = payload;

    //     next();
    // });

    
}

