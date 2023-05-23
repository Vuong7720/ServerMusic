const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  NameAlbum: String,
  NameSinger: String,
  releaseYear: Date,
  imageAlbum: {
    type: Schema.Types.ObjectId,
    ref: 'ImageModel' // Tên của collection chứa ảnh
  },
  listSongs: [String] 

  
}, {
  collection: 'Albums'
});


const AlbumsModel = mongoose.model('Albums', AlbumSchema);

module.exports = AlbumsModel;