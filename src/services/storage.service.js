const cloudinary = require('cloudinary').v2;
require('dotenv').config();
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: YOUR_API_KEY,
  api_secret: YOUR_API_SECRET,
});

module.exports = cloudinary;
