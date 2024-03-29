import multer from "multer";
import path from "path";

export const PORT = 8080;

export const mongoDBURL = 'mongodb+srv://mikleo:mikleo0408@mern-sun-florist.4kfp2ol.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Sun-Florist';

// config image storage
export const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

// congig image filter
export const imageFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}