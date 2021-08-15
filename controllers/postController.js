let posts = [];

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('home', {
            'posts': posts
        });
    });

    app.get('/home', function (req, res) {
        res.render('home', {
            'posts': posts
        });
    });

    app.post('/home', function (req, res) {
        const post = {
            item: req.body.item
        };
        posts.push(post);
        console.log(posts);

        res.json(posts);
    });

    app.delete('/home/:item', function (req, res) {
        const reqItem = req.params.item;
        console.log(reqItem);
        console.log(posts);
        posts = posts.filter(function (item) {
            return item.item.replace(/ /g, '-') != reqItem;
        });
        console.log(posts);
        res.json(posts);
    });
}