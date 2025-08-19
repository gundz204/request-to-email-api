const mongoose = require('mongoose');

const dataRequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DataRequest', dataRequestSchema);
