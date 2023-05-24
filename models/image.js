const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    name: String,
    data: Buffer
  }, {
    collection: 'Images'
  });
  
  const ImageModel = mongoose.model('Image', ImageSchema);
  
  module.exports = ImageModel;



