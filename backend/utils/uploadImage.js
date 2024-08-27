const { Readable } = require("stream");
const cloudinary = require("../config/cloudinary.config");

const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        console.error("Cloudinary upload error:", error); // Log the error for debugging
        return reject(error);
      }
      resolve(result.secure_url);
    });

    const stream = Readable.from(file.buffer);
    stream.pipe(uploadStream);
  });
};
module.exports = uploadImage
