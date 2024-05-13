const express = require('express');
const employeeRoute = express.Router(); // Create a router instance

const {  getemployee,postemployee,deleteemployee,putemployee   } = require('../../Controller/employeeController/employeeContoller');



employeeRoute.get('/getemployee', getemployee);
employeeRoute.post('/postemployee',postemployee );
employeeRoute.delete('/deleteemployee/:empid', deleteemployee);
employeeRoute.put('/putemployee/:empid', putemployee);


module.exports = employeeRoute; 