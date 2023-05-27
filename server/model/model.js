/*
*
*Title      : User Management System CRUD Application
*Description: Create, Read, Update, and Delete (CRUD)
*Author     : Md. Nuruzzamn (cpik)
*Date       :25/05/23
*
*/
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;