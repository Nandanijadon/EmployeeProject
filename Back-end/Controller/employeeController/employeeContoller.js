const connection = require('../../Model/dbConnection');

///////////////////get api///////////////////////////

const getemployee = async (req, res) =>{
    let query = "SELECT * FROM employee";
   await connection.query(query, function(error, result){
        if(error){
            console.log("Error", error.sqlMessage);
        }
        else{
            res.send(result);
        }
    })
};

//post api//

const postemployee = async (req ,res) => {
    let data = req.body;
    let query = 'INSERT INTO employee SET ?';
    connection.query(query,data, function(error , result){

        if (error){
            console.log("error..", error.sqlMessage)
        }

        else{
            
            res.send(result);
        }
    })
}

////delete api//////

const deleteemployee = async (req,res)=>{
    let data = req.params.empid;
    let query = 'DELETE FROM employee WHERE empid = ?';

    await connection.query(query,data, function(error,result){
        if (error){
            console.log("error...", error.sqlMessage);
        }

        else{
            res.send(result);
        }
    })
}


/////////put api////////
const putemployee = async (req, res) => {
    let empid = req.params.empid; // Accessing Sno from route parameters
    let newData = req.body;

    connection.query('UPDATE employee SET ? WHERE empid = ?', [newData, empid], function(error, result) {
        if (error) {
            console.log("Error updating data:", error.sqlMessage);
            res.status(500).send("Error updating data");
        } else {
            if (result.changedRows > 0) {
                res.send("Data updated successfully");
            } else {
                res.send("No rows were updated");
            }
        }
    });
};


module.exports = {
    getemployee,postemployee, deleteemployee, putemployee
};
