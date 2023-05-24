const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const SingerSchema = new Schema({
  nameSingers: String,
  Birthday: Date,
  nationality: String,
  imageSinger: Buffer,
  nameSong: String,

  
}, {
  collection: 'Singers'
});


const SingersModel = mongoose.model('Singers', SingerSchema);

module.exports = SingersModel;