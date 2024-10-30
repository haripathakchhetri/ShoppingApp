const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
  cloud_name: "dlfmzwk6x",
  api_key: '644348435354568',
  api_secret: 'nRGz7i1EKDr6izvChwqx9VA1Jfc',
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: 'auto'
  })

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };

