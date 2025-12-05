const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('user', ['name', 'email']);
        res.json(students);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('user', ['name', 'email']);
        if (!student) return res.status(404).json({ msg: 'Student not found' });
        res.json(student);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Student not found' });
        res.status(500).send('Server Error');
    }
};

exports.createStudent = async (req, res) => {
    // Logic to create student (usually linked to a user creation or existing user)
    res.send('Create student route');
};
