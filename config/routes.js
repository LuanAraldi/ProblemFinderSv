var ProblemController = require('./../controllers/ProblemController');

module.exports = function(app, passport) {

    app.all('/', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/problem', function (req, res) {
        ProblemController.fetchAll(req, res);
    });

    app.post('/problem/new', function(req, res) {
        ProblemController.new(req, res);
    });

    app.post('/problem/solve', function (req, res) {
        ProblemController.solve(req, res);
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
