// Contacts db model

var db = require('../dbconnection');
 
var Contacts = {
 
    getAllContacts: function(callback) { 
        return db.query("select * from contacts", callback);   
    },

    getContactById:function(id, callback){ 
        return db.query("select * from contacts where id=?", [id], callback);
    },

    addContact:function(data, callback){
        return db.query("insert into contacts (name, ngroup, mobile) values (?, ?, ?)", [data.contact.name, data.contact.ngroup, data.contact.mobile], callback);
    },

    deleteContact:function(id, callback){
        return db.query("delete from contacts where id=?", [id], callback);
    },

    updateContact:function(data, callback){
        return db.query("update contacts set name=?, ngroup=?, mobile=? where id=?", [data.contact.name, data.contact.ngroup, data.contact.mobile, data.contact.id], callback);
    }
 
};

module.exports = Contacts;