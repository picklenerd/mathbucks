'use strict';

const mongoose = require('mongoose');
const Problems = mongoose.model('Problems');

exports.list_problems = function(req, res) {
    Problems.find({}, function(err, problem) {
        if (err) {
            res.send(err);
        }
        res.json(problem);
    }).select("-solution");
};

exports.read_problem = function (req, res) {
    Problems.findById(req.params.problemId, function(err, problem) {
        if (err) {
            res.send(err);
        }
        res.json(problem);
    });
};

exports.check_solution = function (req, res) {
    Problems.findById(req.params.problemId, function(err, problem) {
        if (err) {
            res.send(err);
        }
        res.json({
            isCorrect: problem.get("solution") === req.params.solution,
        })
    });
};
