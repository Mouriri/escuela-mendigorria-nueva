const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    grade: {
        type: String,
        required: true
    },
    parentName: {
        type: String
    },
    parentContact: {
        type: String
    },
    // Add other student specific fields
});

module.exports = mongoose.model('Student', StudentSchema);
