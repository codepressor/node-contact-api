var mysql = require('mysql');

var connection = mysql.createPool({
    host:'127.0.0.1',
    user:'test',
    password:'fero!19!',
    database:'test'
});

module.exports = connection;