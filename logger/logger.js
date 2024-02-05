var productionLogger = require("./productionLogger");
var developmentLogger = require("./developmentLogger");
var logger = developmentLogger;

if(process.env.NODE_ENV == "development"){
    logger = developmentLogger;
}else if(process.env.NODE_ENV == "production"){
    logger = productionLogger;
}

module.exports = logger;