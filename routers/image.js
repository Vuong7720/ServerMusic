
const express = require('express');
var router = express.Router();
const ImageModel = require('../models/image')
const AlbumModel = require('../models/albums');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



router.post('/upload', upload.single('image'), async (req, res) => {
    try {
      const { originalname, buffer } = req.file;
  
      const image = new ImageModel({
        name: originalname,
        data: buffer,
      });
  
      const savedImage = await image.save();
      const album = await AlbumModel.findById(req.body.albumId);
      album.imageId = savedImage._id;
      await album.save();
      res.status(200).json({ success: true, image: savedImage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Server error' });
    }
  });


  module.exports = router