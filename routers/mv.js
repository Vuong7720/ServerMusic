 const express = require('express');
 var router = express.Router();
 const MvsModel = require('../models/mv')


router.get('/', (req, res, next) => {
    MvsModel.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.post('/', (req, res, next) => {
        var nameMv = req.body.nameMv
        var author = req.body.author
        var videoMv = req.body.videoMv
        var timeMv = req.body.timeMv
        var production = req.body.production
        var likeMv = req.body.likeMv
        var shareMv = req.body.shareMv
        var createdAt = req.body.createdAt
        var updatedAt = req.body.updatedAt

        MvsModel.create({
            nameMv:nameMv,
            author:author,
            videoMv:videoMv,
            timeMv:timeMv,
            production:production,
            likeMv:likeMv,
            shareMv:shareMv,
            createdAt:createdAt,
            updatedAt:updatedAt
        })
        .then(data=>{
            res.json('them mv thanh cong')
        })
        .catch(err=>{
            res.status.json('them mv that bai')
        })
})
router.put('/:id', (req, res, next) => {
    var id = req.params.id
        var NewNameMv = req.body.NewNameMv
        var NewAuthor = req.body.NewAuthor
        var NewVideoMv = req.body.NewVideoMv
        var NewTimeMv = req.body.NewTimeMv
        var NewProductionMv = req.body.NewProductionMv
        var NewLikeMv = req.body.NewLikeMv
        var NewShareMv = req.body.NewShareMv

        MvsModel.findByIdAndUpdate(id,{
        nameMv:NewNameMv,
        author:NewAuthor,
        videoMv:NewVideoMv,
        timeMv:NewTimeMv,
        production:NewProductionMv,
        likeMv:NewLikeMv,
        shareMv:NewShareMv
    
        })
        .then(data=>{
            res.json('update thanh cong')
        })
        .catch(err=>{
            res.status(500).json('loi server')
        })
    })
router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    MvsModel.deleteOne({
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