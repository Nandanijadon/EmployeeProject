const express = require('express');
const roleRoute = express.Router(); // Create a router instance

const {  getrole,postrole, deleterole, putrole  } = require('../../Controller/roleController/roleController');



roleRoute.get('/getrole', getrole);
roleRoute.post('/postrole',postrole );
roleRoute.delete('/deleterole/:roleid', deleterole);
roleRoute.put('/putrole/:roleid', putrole);


module.exports =  roleRoute; 