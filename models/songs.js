const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const SongsSchema = new Schema({
  nameSong:String,
  singer:String,
  imageSong:Buffer,
  lyrics:String,
  listen:Number,
  production:String,
  createdAt:String,
  updatedAt:String,
  

}, {
  collection: 'songs'
});


const SongsModel = mongoose.model('songs', SongsSchema);

module.exports = SongsModel;