const db = require('../utils/db-connection');
const Course = require('../models/courses');
const Student = require('../models/students');

const addCourses = async (req,res) => {
    try {
        const { name } = req.body;
        const course = await Course.create({ name });
        res.status(201).json({ course });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

const studentCouseadd = async (req,res) => {
    try {
        const { studentId, courseId } = req.body;

        // ✅ Check if student exists
        const student = await Student.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        // ✅ Get courses
        const courses = await Course.findAll({
            where: { id: courseId } // courseId can be single or array
        });
        if (!courses.length) {
            return res.status(404).json({ error: "Course(s) not found" });
        }

        // ✅ Add courses
        await student.addCourses(courses);

        // ✅ Fetch updated student with courses
        const updatedStudent = await Student.findByPk(studentId, { include: Course });

        res.status(201).json({ updatedStudent });

    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports = { addCourses, studentCouseadd };
