var fs = require("fs");
var path = require("path");

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})

var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

module.exports = function(app) {
    mongoose.connect('mongodb://localhost/Mentorship', { userNewUrlParser: true});
}