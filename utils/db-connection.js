const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', 'Kiran@123', {
  host: 'localhost',
  dialect: 'mysql'
});


(async ()=>
    {
        try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
})();
module.exports = sequelize;































// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Kiran@123',
//     database:'testdb'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log('Error');
//         // connection.end();
//         return
//     }
//     console.log('connection has been created');

//     const creationonQuery = `create table IF NOT EXISTS student(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(25),
//     email VARCHAR(50))`

//     connection.query(creationonQuery,(err,res)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log('Table created')
//     })
// })
// module.exports =  connection
