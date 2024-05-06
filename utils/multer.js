import multer from "multer";

// multer config
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.fieldname);
  },
});

// multer middlewares
export const userPhoto = multer({ storage }).single("user-photo");

// Profile Photo Upload
export const profilePhoto = multer({ storage }).single("photo");
