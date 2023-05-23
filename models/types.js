const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const TypesSchema = new Schema({
    NameType: String,
    Describe: String,
    NameSong: String,
  
}, {
  collection: 'Types'
});


const TypesModel = mongoose.model('Types', TypesSchema);

module.exports = TypesModel;