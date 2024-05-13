const mysql = require('mysql');
const connection = mysql.createConnection({

    user: 'root',
    host: 'localhost',
    password: '',
    port: 3306,
    database: 'EmployeeProject'

})

connection.connect(function(err){

    if(err){
        console.log("error occured..")
    }

    else{
        console.log('connection hogya hai jii')
    }

})

module.exports = connection;

