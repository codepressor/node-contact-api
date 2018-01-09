// MySQL connection data

var mysql = require('mysql');

var connection = mysql.createPool({
    host:'127.0.0.1',
    user:'username',
    password:'password',
    database:'database'
});

module.exports = connection;