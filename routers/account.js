const express = require('express');
var router = express.Router();
const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')
const path = require('path');
const pageSize = 2;


router.get('/', (req, res, next) => {
    UserModel.find({})
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})

router.post('/register',(req, res, next)=>{
    var email = req.body.email
    var name = req.body.name
    var username = req.body.username
    var password = req.body.password
    var playlist = req.body.playlist
    var favorites = req.body.favorites
    var history = req.body.history
    var role = req.body.role

    UserModel.findOne({username: username})
    .then(data=>{
      if(data){
        res.json('user nay da ton tai')
      }else{
        return UserModel.create({
          name: name,
          email: email,
          username: username,
          password: password,
          playlist: playlist,
          favorites: favorites,
          history: history,
          role: role,
        })
      }
    }).then(data=>{
      res.json('tao tk thành công')
    })
    .catch(err=>{
      res.status(500).json('tạo tk thất bại')
    })
    
})

// ------login
router.get('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../login.html'))
})

router.post('/login', (req, res, next)=>{
  var username = req.body.username
  var password = req.body.password

  UserModel.findOne({
    username:username,
    password:password
  })
  .then(data=>{
    if(data){
    var token = jwt.sign({_id:data._id}, 'password')
     return res.json({
        message:'thanh cong',
        token: token,
      })
    }else{
      res.status(300).json('username hoac password khong dung')
    }
  })
  .catch(err=>{
    res.status(500).json('co loi ben server')
  })
})

// kiểm tra login (xem lai o phut 30 )

router.get('/private/:token', (req, res, next) => {
  // cua check
  
  try{
    var token = req.params.token
    var result = jwt.verify(token, 'password')
    if(result){
      next()
    }
  }
  catch(err){
    return res.json('ban can phai login')
  }

}, 
(req, res, next) => {
  res.json('welcome')
})



// -------

router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var newPassword = req.body.newPassword
    var newUsername = req.body.newUsername
    UserModel.findByIdAndUpdate(id,{
        
        username: newUsername,
        password: newPassword,

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
    UserModel.deleteOne({
        _id:id,
    })
    .then(data=>{
        res.json('xoa thanh cong')
    })
    .catch(err=>{
        res.status(500).json('xoa that bai')
    })
})



// phan trang....................
router.get('/user', (req, res, next) => {
var page = req.query.page
if(page){
  page = parseInt(page)
  if(page <= 1){
    page = 1
  }
  var skip = (page - 1)*pageSize

  UserModel.find({})
  .skip(skip)
  .limit(pageSize)
  .then(data=> {
    res.json(data)
  })
  .catch(err => {
    res.status(500).json('loi server')
  })
}
else{
  UserModel.find({})
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    res.status(500).json('loi server')
  })

}
})




module.exports = router