
const db = require('../utils/db-connection')

const addEntries = (req,res)=>{
    const {email,name} = req.body;
    const insertQuery = `INSERT INTO student(name,email) VALUES(?,?)`

    db.execute(insertQuery,[name,email],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            // db.end()
            return
        }
        console.log('Value has been inserted')
        res.status(200).send(`student with name ${name} successfully added`)
    })
}

const updateEntries = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body
    const updateQueris = 'UPDATE student set name = ? WHERE id = ?';

    db.execute(updateQueris,[name,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            // db.end()
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send('Student not found');
            return
        }
        res.status(200).send('user has been updated')

    })
}

const deleteEntries = (req,res)=>{
    const {id} = req.params;
    const deleteQuery ='DELETE from student WHERE id = ?';

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send('Student not found');
            return;
        }
        res.status(200).send(`user with ID ${id} is deleted`)
    })
}

module.exports ={
    addEntries,
    updateEntries,
    deleteEntries
}