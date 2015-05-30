/**
 * Countdown IRC bot
 * main application script
 */
console.log('Countdown IRC bot');

// Set node env
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// dependencies
var bot = require('./app/bot');

// init the bot
bot.init();
// load channel command definitions
require('./config/commands.js')(bot);
