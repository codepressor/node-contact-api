// Groups db model

var db = require('../dbconnection');
 
var Groups = {
 
    getAllGroups: function(callback) { 
        return db.query("select * from groups", callback);   
    },

    addGroup:function(name, callback){
        return db.query("insert into groups (name) values (?)", name, callback);
    },

    deleteGroup:function(id, callback){
        return db.query("delete from groups where id=?", [id], callback);
    },
 
};

module.exports = Groups;