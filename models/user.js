const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email:String,
  name: String,
  playlist:String,
  favorites:String,
  history:String,
  role:String,
}, {
  collection: 'user'
});


const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;