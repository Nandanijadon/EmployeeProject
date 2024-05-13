const connection = require('../../Model/dbConnection');

///////////////////get api///////////////////////////

const getrole = async (req, res) =>{
    let query = "SELECT * FROM role";
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

const postrole = async (req ,res) => {
    let data = req.body;
    let query = 'INSERT INTO role SET ?';
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

const deleterole = async (req,res)=>{
    let data = req.params.roleid;
    let query = 'DELETE FROM role WHERE roleid = ?';

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
const putrole = async (req, res) => {
    let roleid = req.params.roleid; // Accessing Sno from route parameters
    let newData = req.body;

    connection.query('UPDATE role SET ? WHERE roleid = ?', [newData, roleid], function(error, result) {
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
    getrole,postrole, deleterole, putrole
};
