const express = require('express');
const route = express.Router();
const studentController = require('../controller/studentController')

route.post('/add',studentController.addEntries);
route.put('/update/:id',studentController.updateEntries)
route.delete('/delete/:id',studentController.deleteEntries)

route.post('/adding',studentController.addingValusesToStudentAndTdentities)

module.exports = route
