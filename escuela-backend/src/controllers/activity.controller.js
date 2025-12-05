const Activity = require('../models/Activity');

exports.getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find().sort({ date: -1 });
        res.json(activities);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createActivity = async (req, res) => {
    try {
        const newActivity = new Activity({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            imageUrl: req.body.imageUrl, // Assuming image URL is passed or handled via upload middleware
            createdBy: req.user.id
        });
        const activity = await newActivity.save();
        res.json(activity);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
