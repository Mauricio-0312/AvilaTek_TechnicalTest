const logger = require("../logger/logger");

var log = (req, res, next) => {

    let oldSend = res.send.bind(res);
    res.send = (data) => {
        if(data.message){
            var logMessage = {
                res: data.message,
                status: data.reqStatus ? data.reqStatus : data.status,
                url: req.url,
                method: req.method,
                params: req.params
            };
        }

        if(req.user && req.user._id){
            logMessage.user = req.user._id;
        }

        if(logMessage.status == "success"){
            logger.info(logMessage);
        }else if(logMessage.status == "error"){
            logger.warn(logMessage)
        }
    }

    oldSend(data);

    next();
}

module.exports = log;