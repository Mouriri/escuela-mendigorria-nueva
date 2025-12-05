const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subjects: [{
        type: String
    }],
    classes: [{
        type: String
    }]
    // Add other teacher specific fields
});

module.exports = mongoose.model('Teacher', TeacherSchema);
