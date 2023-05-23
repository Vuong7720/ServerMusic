const express = require('express');
var router = express.Router();
const AlbumsModel = require('../models/albums')


router.get('/', (req, res, next) => {
    AlbumsModel.find({})
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.post('/', (req, res, next) => {
    var NameAlbum = req.body.NameAlbum
    var NameSinger = req.body.NameSinger
    var releaseYear = req.body.releaseYear
    var imageAlbum = req.body.imageAlbum
    var listSongs = req.body.listSongs
    AlbumsModel.create({
        NameAlbum: NameAlbum,
        NameSinger: NameSinger,
        releaseYear: releaseYear,
        imageAlbum: imageAlbum,
        listSongs: listSongs,
    })
    .then(data=>{
        res.json('them album thanh cong')
    })
    .catch(err=>{
        res.status(500).json('them album that bai')
    })
})
router.put('/:id', (req, res, next) => {
    var id  = req.params.id
    var NewNameAlbum = req.body.NewNameAlbum
    var NewNameSinger = req.body.NewNameSinger
    var NewreleaseYear = req.body.NewreleaseYear
    var NewimageAlbum = req.body.NewimageAlbum
    var NewlistSongs = req.body.NewlistSongs


    AlbumsModel.findByIdAndUpdate(id,{
        NameAlbum: NewNameAlbum,
        NameSinger: NewNameSinger,
        releaseYear: NewreleaseYear,
        imageAlbum: NewimageAlbum,
        listSongs: NewlistSongs
    })
    .then(data=>{
        res.json('cap nhat album thanh cong')
    })
    .catch(err => {
        res.status.json('cap nhat album that bai')
    })
})
router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    AlbumsModel.deleteOne({
        _id: id
    })
    .then(data=>{
        res.json('da xoa thanh cong')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})




module.exports = router