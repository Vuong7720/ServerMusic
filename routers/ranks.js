const express = require('express');
var router = express.Router();
const RankModel = require('../models/ranks');

router.get('/', (req, res, next) => {
    RankModel.find({})
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.post('/', (req, res, next) => {
    var TopPopular = req.body.TopPopular;
    var TopSinger = req.body.TopSinger
    var TopLike = req.body.TopLike
    var TopListen = req.body.TopListen

    RankModel.create({
        TopPopular: TopPopular,
        TopSinger: TopSinger,
        TopLike: TopLike,
        TopListen: TopListen
    })
    .then(data => {
        res.json('them rank thanh cong')
    })
    .catch(err =>{
        res.status(500).json('loi server, them rank that bai')
    })
})
router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var NewTopPopular = req.body.NewTopPopular
    var NewTopSinger = req.body.NewTopSinger
    var NewTopLike = req.body.NewTopLike
    var NewTopListen = req.body.NewTopListen

    RankModel.findByIdAndUpdate(id,{
        TopPopular: NewTopPopular,
        TopSinger: NewTopSinger,
        TopLike: NewTopLike,
        TopListen: NewTopListen
    })
    .then(data => {
        res.json('cap nhat rank thanh cong')
    })
    .catch(err => {
        res.status(500).json('cap nhat rank that bai')
    })

})
router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    RankModel.deleteOne({_id:id})
    .then(data => {
        res.json('xoa thanh cong')
    })
    .catch(err => {
        res.status(500).json('xoa that bai')
    })
})



module.exports = router