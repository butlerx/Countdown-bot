var fs = require('fs'),
    JaySchema = require('jayschema'),
    _ = require('underscore');



// Initialize base configuration and ENV
var config = _.extend(
    require(__dirname + '/../config/env/all.js'),
    require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.json') || {},
    { cards: [] }
);


module.exports = config;
