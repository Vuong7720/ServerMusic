const express = require('express');
var router = express.Router();
const SongsModel = require('../models/songs')

router.get('/', (req, res, next) => {
    SongsModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json('loi server')
    })
})
router.post('/', (req, res, next) => {
        var nameSong = req.body.nameSong
        var singer = req.body.singer
        var imageSong = req.body.imageSong
        var lyrics = req.body.lyrics
        var listen = req.body.listen
        var production = req.body.production
        var createdAt = req.body.createdAt
        var updatedAt = req.body.updatedAt

    SongsModel.create({
        nameSong:nameSong,
        singer: singer,
        imageSong: imageSong,
        lyrics: lyrics,
        listen: listen,
        production: production,
        createdAt: createdAt,
        updatedAt: updatedAt
    })
    .then(data => {
        res.json('them thanh cong')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })

})
router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var NewnameSong = req.body.NewnameSong
    var Newsinger = req.body.Newsinger
    var NewimageSong = req.body.NewimageSong
    var Newlyrics = req.body.Newlyrics
    var Newlisten = req.body.Newlisten
    var Newproduction = req.body.Newproduction

    SongsModel.findByIdAndUpdate(id,{
        nameSong:NewnameSong,
        singer: Newsinger,
        imageSong: NewimageSong,
        lyrics: Newlyrics,
        listen: Newlisten,
        production: Newproduction,
    })
    .then(data => {
        res.json('chinh sua thanh cong')
    })
    .catch(err => {
        res.status(500).json('chinh sua that bai')
    })

})
router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    SongsModel.deleteOne({
        _id:id,
    })
    .then(data=>{
        res.json('xoa thanh cong')
    })
    .catch(err=>{
        res.status(500).json('xoa that bai')
    })
})




module.exports = router 