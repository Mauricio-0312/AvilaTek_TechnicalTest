var dotenv = require("dotenv");
dotenv.config({path: `./.env.${process.env.NODE_ENV}`});
var bcrypt = require("bcrypt");

const mongoose = require("mongoose");
var fs = require("fs");

const app = require("./app");
var port = process.env.PORT || 3003;

const connection_url = process.env.DB_URL;

mongoose.Promise = global.Promise;
mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(async ()=>{
            console.log("Database connected successfully");

            // fs.mkdir("signatureImages", (error) => {
            //     // console.log(error);
            // });
            
            //If there are no users on the database, create one to be able to use the app
            // var users = await User.find();
            // if(users && users.length === 0){
            //     var hash = await bcrypt.hash("password123", 10);
                
            //     var user = new User({
            //         name: "admin",
            //         lastName: "admin",
            //         email: "admin@admin.com",
            //         password: hash,
            //         role: "admin",
            //         passHistory: []
            //     });
                
            //     await user.save();
            // }

            app.listen(port, ()=>{
                console.log("Server on port "+port);
            });
        });