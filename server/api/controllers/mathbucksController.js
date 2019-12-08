'use strict';

const mongoose = require('mongoose');
const Problems = mongoose.model('Problems');

exports.list_problems = function(req, res) {
    Problems.find({}, function(err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

exports.read_problem = function (req, res) {
    Task.findById(req.params.problemId, function(err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};
