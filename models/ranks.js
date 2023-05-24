const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serverMusic');

const Schema = mongoose.Schema;

const RankSchema = new Schema({
    TopPopular: String,
    TopSinger: String,
    TopLike: String,
    TopListen: String,

  
}, {
  collection: 'Ranks'
});


const RankModel = mongoose.model('Ranks', RankSchema);

module.exports = RankModel;