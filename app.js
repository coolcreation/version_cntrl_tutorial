/*
Jeff   5-22-23
Webscraping 
app.js
Creat a node project with express. Includes routing with handlebars.js
https://www.youtube.com/watch?v=_ICIRY3mfHo&list=PLCC34OHNcOtpecaQ4uuN3bAfWIb6uY5m8&index=4&ab_channel=Codemy.com
-- require will throw an error if used in the web browser, but should work fine in the terminal --
Views are webpages, layouts are templates

Initializing Git For Version Control :
git config --global user.name "Jeff B"
git config --global user.email "jeffbohn@my.cwi.edu"
git config --global push.default matching
git config --global alias.co checkout
git init
git add .
git commit -am 'initial commit'
*/

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const port = process.env.port || 5000;

// Set Handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

// Set Handlebar routes
app.get('/', (req, res) => {
    res.render('home',
    {stuff: "This is stuff..."}
    )

});

//  Set static folder - this is the routing for a static page
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log("Listening on port " + port));










