const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser= require('body-parser');
//contains all the database Schema
require('./models/Schemas');
const test = require('./test/test');
mongoose.connect(keys.mongoURI);

const app = express();

const User = mongoose.model('users');
const currentUser = mongoose.model('currentUser');
const userLogs = mongoose.model('userLogs');
const recordClicks = mongoose.model('recordClicks');
const recordScroll = mongoose.model('recordScroll');
const recordFavorite = mongoose.model('recordFavorite');
const recordSearch = mongoose.model('recordSearch');
const recordCopy = mongoose.model('recordCopy');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));







app.post('/api/register',function(req,res){
      var username = req.body.username;
      var password = req.body.password;
      //console.log(req.body);


      //checking if user already exists

      User.findOne({username: username, password: password}, function(err,user){

          if(!user){
              console.log("new user");
              var result="";
   	          var d = new Date();
   	          result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() +
                        " "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
                        +" "+d.getMilliseconds();

              //logging data
              new userLogs({timestamp: result , username: username}).save();
              //
              new User({username,password}).save()
              .then((user)=>{
                //res.send('Registered');
                res.redirect('/userlogs');
              });

              //currentUser update
              currentUser.count({}, function(err, res){
                if(res){
                  //console.log(res);
                  currentUser.remove({uselessID:'uselessID'}, function(err, res){
                    //console.log('inside');

                  });
                }
                else{
                //console.log('nothing found');
                }
                new currentUser({uselessID:'uselessID',username}).save();

              });


          }
          else{
            //user already exists
            res.redirect('/registererror');
          }

      });
});


app.post('/api/login', function(req, res){
  console.log('login api called')
  var username = req.body.username;

  var password = req.body.password;
  //console.log('username and password '+username+' '+password);

  User.findOne({username: username, password: password}, function(err, user){
    if(!user){
    //  console.log('New user');
      res.redirect('/errorlogin');
    }
    else{
      //console.log('old user'+user);

      //currentUser update
      currentUser.count({}, function(err, res){
        if(res){
          console.log(res);
          currentUser.remove({uselessID:'uselessID'}, function(err, res){
            //console.log('inside');

          });
        }
        else{
        //console.log('nothing found');
        }
        new currentUser({uselessID:'uselessID',username}).save();

      });
      var result="";
      var d = new Date();
      result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() +
                " "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
                +" "+d.getMilliseconds();

      //log user sign-in in
      new userLogs({timestamp: result, username: username}).save();
      res.redirect('/userlogs');
    }
  });


});










app.post('/api/clicks', function(req, res){
  console.log('clicks api called');
  var timestamp = req.body.timestamp;
  var currentUrl = req.body.currentUrl;
  var redirectUrl = req.body.redirectUrl;
  var result="";
  var d = new Date();
  result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() +
            " "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            +" "+d.getMilliseconds();

  currentUser.findOne({uselessID:'uselessID'}, function(err, res){
    username = res.username;
    //console.log('res='+res);
    new recordClicks({timestamp:result, username, currentUrl, redirectUrl}).save();
  });
  //console.log('current user found:'+user+ '\nother stuff: '+timestamp+currentUrl+redirectUrl);

});

app.post('/api/favorite', function(req, res){
  console.log('favorite api called');
  var timestamp = req.body.timestamp;
  var favoriteUrl = req.body.favoriteUrl;
  var favoriteQuestion = req.body.favoriteQuestion;
  var result="";
  var d = new Date();
  result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() +
            " "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            +" "+d.getMilliseconds();

  currentUser.findOne({uselessID:'uselessID'}, function(err, res){
    username = res.username;
    //console.log('res='+res);
    new recordFavorite({timestamp:result, username, favoriteUrl, favoriteQuestion}).save();
  });
  //console.log('current user found:'+user+ '\nother stuff: '+timestamp+currentUrl+redirectUrl);

});

app.post('/api/scroll', function(req, res){
  console.log('scroll api called');
  var timestamp = req.body.timestamp;
  var scrollPercentage = req.body.scrollPercentage;
  var scrollUrl = req.body.scrollUrl;
  var result="";
  var d = new Date();
  result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() +
            " "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            +" "+d.getMilliseconds();

  currentUser.findOne({uselessID:'uselessID'}, function(err, res){
    username = res.username;
    //console.log('res='+res);
    new recordScroll({timestamp:result, username, scrollPercentage, scrollUrl}).save();
  });
  //console.log('current user found:'+user+ '\nother stuff: '+timestamp+currentUrl+redirectUrl);

});

app.post('/api/search', function(req, res){
  console.log('search api called');
  var timestamp = req.body.timestamp;
  var searchUrl = req.body.searchUrl;
  var result="";
  var d = new Date();
  result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() +
            " "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            +" "+d.getMilliseconds();

  currentUser.findOne({uselessID:'uselessID'}, function(err, res){
    username = res.username;
    //console.log('res='+res);
    new recordSearch({timestamp:result, username, searchUrl}).save();
  });
  //console.log('current user found:'+user+ '\nother stuff: '+timestamp+currentUrl+redirectUrl);

});

app.post('/api/copy', function(req, res){
  console.log('copy api called');
  var timestamp = req.body.timestamp;
  var copyUrl = req.body.copyUrl;
  var result="";
  var d = new Date();
  result += d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate() +
            " "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            +" "+d.getMilliseconds();

  currentUser.findOne({uselessID:'uselessID'}, function(err, res){
    username = res.username;
    //console.log('res='+res);
    new recordCopy({timestamp:result, username, copyUrl}).save();
  });
  //console.log('current user found:'+user+ '\nother stuff: '+timestamp+currentUrl+redirectUrl);

});



app.get('/api/getsomething', async function(req, res){
  //var dummy = [ {key:1,value:'one'},{key:2, value:'two'}];

  const exUser = await currentUser.findOne({uselessID:'uselessID'});
  if(exUser)
  {
      var username=exUser.username;
      //console.log('current user 123123123 '+username);
      const logs = await userLogs.find({username:username});
      //console.log(logs);
      var time = logs.map(function(x){
         return x.timestamp;
       });
       //console.log(time);
       res.send(time);
  }
  else{
    res.send('user Not found')
  }
  //res.send(dummy);
  //console.log('putside '+timeee);
  //console.log('\n\ngetsomething ends\n\n');
  //res.render('error', { error: err })
});


app.get('/api/getcurrentuser', async function(req, res){
  cuser = await currentUser.findOne({uselessID:'uselessID'});
  //console.log('\nCCCCurrent user'+cuser.username);
  res.send(cuser.username);



});

//----Production stuff----
if(process.env.NODE_ENV == 'production'){
  //serving main.js or main.css
    app.use(express.static('client/build'));

    //fallback option
    const path = require('path');
    app.get('*', (req,res) =>{
      res.sendFile(path.resolve(
          __dirname,'client', 'build', 'index.html'));

    });
}




/*---Dynamic port binding done here----
    Use 5000 port in development otherwise
    let Heroku decide dynamically
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT);
