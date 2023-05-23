const express = require('express');
var router = express.Router()
const SingersModel = require('../models/singers')

router.get('/', (req, res, next) => {
    SingersModel.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.post('/', (req, res, next) => {
    var nameSingers = req.body.nameSingers
    var Birthday = req.body.Birthday
    var nationality = req.body.nationality
    var imageSinger = req.body.imageSinger
    var nameSong = req.body.nameSong
    SingersModel.create({
        nameSingers:nameSingers,
        Birthday: Birthday,
        nationality: nationality,
        imageSinger: imageSinger,
        nameSong: nameSong,
    })
    .then(data =>{
        res.json('them singer thanh cong')
    })
    .catch(err =>{
        res.status(500).json('loi server')
    })
})
router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var NewnameSingers = req.body.NewnameSingers
    var NewBirthday = req.body.NewBirthday
    var Newnationality = req.body.Newnationality
    var NewimageSinger = req.body.NewimageSinger
    var NewnameSong = req.body.NewnameSong


    SingersModel.findByIdAndUpdate(id,{
        nameSingers: NewnameSingers,
        Birthday: NewBirthday,
        nationality: Newnationality,
        imageSinger: NewimageSinger,
        nameSong: NewnameSong
    })
    .then(data => {
        res.json('up date singer thanh cong')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    SingersModel.deleteOne({
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