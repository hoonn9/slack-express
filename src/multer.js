const fs = require('fs');
const multer = require('multer');
const path = require('path');
const router = require('express').Router();

try {
  fs.readdirSync('uploads');
} catch (error) {
  fs.mkdirSync('uploads');
}

exports.upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'uploads', decodeURIComponent(req.path)));
});

exports.uploadRouter = router;
