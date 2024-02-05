const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json } = format;
 
/*const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});*/

const developmentLogger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
  ),
  transports: [
    new transports.Console()
  ],
});

module.exports = developmentLogger;