Router.configure({layoutTemplate: 'layout'});

Router.route('/', function() {
    this.redirect("/home");
});

Router.route('/home', function() {
    this.render('home');
});

Router.route('/test', function() {
    this.render('test');
});
