import express from "express";
import { profilePhoto } from "../utils/multer.js";
import {
  accountActivationByOtp,
  getLogedInUser,
  login,
  logoutUser,
  registerUser,
  passwordChange,
  uploadProfilePhoto,
} from "../controllers/authController.js";
import tokenVarify from "../middlewares/tokenVarify.js";

// init router form express
const router = express.Router();

// routing
router.post("/register", registerUser);
router.post("/account-activation-by-otp/:token", accountActivationByOtp);
router.post("/login", login);

router.get("/me", tokenVarify, getLogedInUser);
router.post("/logout", logoutUser);
router.post("/password-change", tokenVarify, passwordChange);
router.post("/upload-profile-photo", profilePhoto, uploadProfilePhoto);

// export default
export default router;
