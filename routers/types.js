const express = require('express');
var router = express.Router();
const TypesModel = require('../models/types')

router.get('/', (req, res, next) => {
    TypesModel.find({})
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.status(500).json('loi server')
    })
})
router.post('/', (req, res, next) => {
    var NameType = req.body.NameType
    var Describe = req.body.Describe
    var NameSong = req.body.NameSong

    TypesModel.create({
        NameType: NameType,
        Describe: Describe,
        NameSong: NameSong
    })
    .then(data =>{
        res.json('them the loai thanh cong')
    })
    .catch(err =>{
        res.status(500).json('them the loai that bai')
    })
})
router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var NewNameType = req.body.NewNameType
    var NewDescribe = req.body.NewDescribe
    var NewNameSong = req.body.NewNameSong

    TypesModel.findByIdAndUpdate(id,{
        NameType: NewNameType,
        Describe: NewDescribe,
        NameSong: NewNameSong
    })
    .then(data => {
        res.json('cap nhat the loai thanh cong')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.delete('/', (req, res, next) => {
    var id = req.params.id
    TypesModel.deleteOne({_id:id}).then(data=>{
        res.json('xoa thanh cong')
    })
    .catch(err => {
        res.status(500).json('loi server, xoa that bai')
    })
})




module.exports = router