const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const MvsSchema = new Schema({
  nameMv:String,
  author:String,
  imageMv:Buffer,
  timeMv:String,
  production:String,
  likeMv:String,
  shareMv:String,
  createdAt:String,
  updatedAt:String,
  
}, {
  collection: 'Mvs'
});


const MvsModel = mongoose.model('Mvs', MvsSchema);

module.exports = MvsModel;