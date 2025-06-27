// middle wire to handle file uploads
const multer = require('multer');
const path = require('path');

 const storage = multer.diskStorage({
    destination:'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid name conflicts
    },
});

const upload = multer({ storage });

module.exports = upload;
