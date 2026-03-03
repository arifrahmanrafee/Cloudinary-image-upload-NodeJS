const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const cloudinary = require('../src/services/storage.service');

const app = express();

// Middleware

app.use(express.json());
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

/**
 * Api For posting data
 */
app.post('/upload', upload.single('image'), function (req, res) {
  cloudinary.uploader.upload(req.file.path, function (err, result) {
    // console.log(result.url);
    if (err) {
      console.log(err);
    
      return res.status(500).json({
        success: false,
        message: 'error',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Uploaded!',
      data: result,
    });
  });
});

module.exports = app;
