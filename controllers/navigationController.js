module.exports = function (app) {
    // about page route
    app.get('/about', function (req, res) {
        res.render('about');
    });
};