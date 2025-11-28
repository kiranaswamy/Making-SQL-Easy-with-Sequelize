const express = require('express')
const app = express();
const studentRoutes = require('./routes/studentRoutes')

const studentModel = require('./models/students')

const db = require('./utils/db-connection')
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hi how are you')
})
app.use('/students',studentRoutes)

db.sync({force:true}).then(()=>{
app.listen(3000,()=>{
   console.log('server is runing')
});
}).catch((err)=>{
    console.log(err)
})


