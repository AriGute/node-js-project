module.exports = function (app) {
    app.get('/profile', function (req, res) {
        res.render('profile');
    });
    app.get('/home', function (req, res) {
        res.render('home');
    });
    app.get('/login', function (req, res) {
        res.render('login');
    });
    app.get('/signup', function (req, res) {
        res.render('signup');
    });
};