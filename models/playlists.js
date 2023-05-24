const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  NamePlaylist: String,
  Creator: String,
  category: String,
  imagePlaylist: Buffer,
  ListSong: String,

  
}, {
  collection: 'Playlists'
});


const PlaylistModel = mongoose.model('Playlists', PlaylistSchema);

module.exports = PlaylistModel;