const express = require('express');
var router = express.Router();
const PlaylistModel = require('../models/playlists')

router.get('/', (req, res, next) => {
    PlaylistModel.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.post('/', (req, res, next) => {
    var NamePlaylist = req.body.NamePlaylist
    var Creator = req.body.Creator
    var category = req.body.category
    var imagePlaylist = req.body.imagePlaylist
    var ListSong = req.body.ListSong
    PlaylistModel.create({
        NamePlaylist: NamePlaylist,
        Creator: Creator,
        category: category,
        imagePlaylist: imagePlaylist,
        ListSong: ListSong,
    })
    .then(data=>{
        res.json('them playlist thanh cong')
    })
    .catch(err=>{
        res.status(500).json('loi server')
    })
})
router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var NewNamePlaylist = req.body.NewNamePlaylist
    var NewCreator = req.body.NewCreator
    var Newcategory = req.body.Newcategory
    var NewimagePlaylist = req.body.NewimagePlaylist
    var NewListSong = req.body.NewListSong

    PlaylistModel.findByIdAndUpdate(id,{
        NamePlaylist: NewNamePlaylist,
        Creator: NewCreator,
        category: Newcategory,
        imagePlaylist: NewimagePlaylist,
        ListSong: NewListSong,
    })
    .then(data=>{
        res.json('cap nhat playlist thanh cong')
    })
    .catch(err=>{
        res.status(500).json('loi server')
    })
})
router.delete('/:id', (req, res, next) => {
        var id = req.params.id
        PlaylistModel.findOne({_id:id})
        .then(data=>{
            res.json('xoa thanh cong')
        })
        .catch(err=>{
            res.status(500).json('loi server')
        })
})



module.exports = router

