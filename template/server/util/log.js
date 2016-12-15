const log4js = require('log4js')
const config = require('./logConf.json')
log4js.configure(config)
log4js.replaceConsole()
const logger = log4js.getLogger('things')
// logger.setLevel('DEBUG')
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

module.exports = logger
