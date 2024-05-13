const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

const port = 5000;

const employeeRoute = require('./Route/employeeRoute/employeeRoute');
const roleRoute = require('./Route/roleRoute/roleRoute')

app.use('/',employeeRoute);
app.use('/',roleRoute)

app.listen(port, () => {
    console.log(`server is running on ${port} port`)
}); 
