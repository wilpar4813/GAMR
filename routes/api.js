const db = require('../models');
const passport = require('passport');

function routes (app) {
    app.post('/register', function(req, res){

          var newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          });
      
          db.User.createUser(newUser, function(err, user){
            if(err) throw err;
            res.send(user).end()
          });
        
      });
      
      // Endpoint to login

app.post('/login',
passport.authenticate('local'),
function(req, res) {
  res.send(req.user);
}
);

// Endpoint to get current user
app.get('/user', function(req, res){
res.send(req.user);
})


// Endpoint to logout
app.get('/logout', function(req, res){
req.logout();
res.send(null)
});

}

module.exports = routes;