'use strict';

module.exports = function(app) {
    const mathbucks = require('../controllers/mathbucksController');
    
    app.route('/api/problems')
        .get(mathbucks.list_problems);

    app.route('/api/problems/problemId')
        .get(mathbucks.read_problem);
};
