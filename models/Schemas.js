const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({
  username: String,
  password: String
});

const currentUser = new Schema({
  uselessID: String,
  username: String,

});

const recordClicks = new Schema({
    timestamp: String,
    username: String,
    currentUrl: String,
    redirectUrl: String
});

const recordFavorite = new Schema({
    timestamp: String,
    username: String,
    favoriteQuestion: String,
    favoriteUrl: String
});

const recordScroll = new Schema ({
    timestamp: String,
    username: String,
    scrollPercentage: String,
    scrollUrl: String

});

const recordSearch = new Schema({
  timestamp: String,
  username: String,
  searchUrl: String,


});

const recordCopy = new Schema({
  timestamp: String,
  username: String,
  copyUrl: String,


});

const userLogs = new Schema({
  timestamp: String,
  username: String

});


mongoose.model('users', userSchema);
mongoose.model('currentUser', currentUser);
mongoose.model('recordClicks', recordClicks);
mongoose.model('recordFavorite', recordFavorite);
mongoose.model('recordScroll', recordScroll);
mongoose.model('recordSearch', recordSearch);
mongoose.model('recordCopy', recordCopy);
mongoose.model('userLogs', userLogs);
