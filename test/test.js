const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

var id='12bce009';

module.exports = app => {
  app.get('/mongo',()=>{
    User.findOne({userId:id})
    .then((existingUser) => {
      if(existingUser){

      }else{
        new User({userId:id}).save();
      }
    })


  });
};
