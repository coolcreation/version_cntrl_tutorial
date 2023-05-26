/*
Jeff   5-22-23
Webscraping 
app.js
Creat a node project with express. Includes routing with handlebars.js
https://www.youtube.com/watch?v=_ICIRY3mfHo&list=PLCC34OHNcOtpecaQ4uuN3bAfWIb6uY5m8&index=4&ab_channel=Codemy.com
-- require will throw an error if used in the web browser, but should work fine in the terminal --
Views are webpages, layouts are templates

Initializing Git For Version Control (use bash in terminal) , https://www.youtube.com/watch?v=Lk6jCVAS3Iw&ab_channel=Codemy.com :
git config --global user.name "Jeff B"
git config --global user.email "---------"
git config --global push.default matching
git config --global alias.co checkout
git init
git add .    (this adds all of the code we are "cd'ed" into)
git commit -am 'initial commit'
ls -a        (location where all the files were saved)
-Now all the files are converted into a repo, but we still need to push them to Github:
cd ~/        (puts us back to local user account)
mkdir .ssh
cd .ssh
ssh-keygen.exe  (create a user key)
It will ask where to save file, just hit enter. 
Then it will ask if we want to save a passphrase. Don't setup a passphrase, just hit enter, twice!
ls              (it will give 2 files:  id_rsa  id_rsa.pub  ; we want this file 'id_rsa.pub')
cat id_rsa.pub   (THIS WILL GENERATE OUR SSH KEY)
Now that we have thje ssh key go to github:
1) Click on Github avatar, go to setttings, then SSH and GPG keys.
2) Click new ssh key button and paste in our key, name it whatever we want
3) Now, in the terminal, navigate back to our current project as follows:
cd ~/        (puts us back to local user account)
then type in the correct path, should say "master" if successful.
4) Connect to our Github account from the terminal
5) Go to Github and create a new repo, call it whatever we want.
6) Where it says '…or push an existing repository from the command line', copy those lines to terminal
This will literally "push" our local repository up to Github
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










