var db = require('../dbconnection');
 
var Contacts = {
 
    getAllContacts: function(callback) { 
        return db.query("select * from contacts", callback);   
    },

    getContactById:function(id, callback){ 
        return db.query("select * from contacts where id=?", [id], callback);
    },

    addContact:function(contact, callback){
        return db.query("insert into contacts (name, ngroup, mobile) values (?, ?, ?)", [contact.name, contact.group, contact.mobile], callback);
    },

    deleteContact:function(id, callback){
        return db.query("delete from contacts where id=?", [id], callback);
    },

    updateContact:function(id, contact, callback){
        return db.query("update contacts set name=?, ngroup=?, mobile=? where id=?", [contact.name, contact.group, contact.mobile, contact.id], callback);
    }
 
};

module.exports = Contacts;