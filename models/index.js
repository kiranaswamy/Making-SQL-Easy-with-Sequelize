const Student = require('./students');
const IdentityCard = require('./identitycard');
const Departement = require('./department');
const Course = require('../models/courses');
const StudentCourse = require('../models/studentCourses')


Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Departement.hasMany(Student);
Student.belongsTo(Departement);


Student.belongsToMany(Course, { through: StudentCourse });
Course.belongsToMany(Student, { through: StudentCourse });

module.exports = {
    Student,
    IdentityCard,
    Departement,
    Course,
    StudentCourse
}