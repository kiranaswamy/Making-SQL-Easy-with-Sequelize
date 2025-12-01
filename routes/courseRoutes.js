const express = require('express');
const route = express.Router();
const courseController = require('../controller/courseController')

route.post('/addCourse',courseController.addCourses);
route.get('/addStudentValue',courseController.studentCouseadd)

console.log("Course routes loaded");
module.exports = route
