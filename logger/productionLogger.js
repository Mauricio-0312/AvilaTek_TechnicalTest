const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json } = format;

const productionLogger = createLogger({
    level: 'info',
    // format: winston.format.simple(),
    format: combine(
        timestamp(),
        json()
    ),

    //defaultMeta: { service: 'user-service' },
    transports: [
        new transports.Console(),
        new transports.File({filename: 'logs.log'})
    ],
    exceptionHandlers: [
        new transports.File({ filename: 'exceptions.log' })
    ]
    /*rejectionHandlers: [
        new transports.File({ filename: 'rejections.log' })
    ]*/
});

module.exports = productionLogger;