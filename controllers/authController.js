import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import { fileUploadToCloud } from "../utils/cloudinary.js";
import {
  createOTP,
  isEmail,
  isMobile,
  stringsToDots,
} from "../helpers/helpers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AccountActivationEmail } from "../mails/AccountActivationMail.js";
import { sendSMS } from "../utils/sendSms.js";
import dotenv from "dotenv";

dotenv.config();

/**
 * @description Register New User
 * @method POST
 * @route /api/v1/auth/register
 * @access public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, auth, password, role } = req.body;

  // validation
  if (!name || !auth || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //Check Auth Email Or Phone
  let authEmail = null;
  let authPhone = null;

  //Validation Email OR Phone
  if (isEmail(auth)) {
    authEmail = auth;

    //Duplicate Email Find
    const checkEmail = await User.findOne({ email: auth });

    //Duplicate Email Check
    if (checkEmail) {
      return res.status(400).json({ message: "Email Allready Exist" });
    }
  } else if (isMobile(auth)) {
    authPhone = auth;

    //Duplicate Phone Find
    const chekPhone = await User.findOne({ phone: auth });

    //Duplicate Phone Check
    if (chekPhone) {
      return res.status(400).json({ message: "Phone Allready Exist" });
    }
  } else {
    return res.status(400).json({ message: "Invalid Email OR Phone Number" });
  }

  const otp = createOTP();

  // hash password
  const hashPessword = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email: authEmail,
    phone: authPhone,
    password: hashPessword,
    role,
    accessToken: otp,
  });

  if (user) {
    //Create Activation Key
    const activationKey = jwt.sign(
      { auth, accessToken: user.accessToken },
      process.env.ACCOUNT_ACTIVATION_SECRET,
      { expiresIn: "15min" }
    );

    //Send Activation Key
    res.cookie("activationKey", activationKey);

    if (authEmail) {
      //Send Otp In Email
      await AccountActivationEmail(authEmail, { code: otp, link: "" });
    } else if (authPhone) {
      //Send sms In Phone Number
      await sendSMS(
        auth,
        `Hello ${name}, You Account activation OTP is ${otp}`
      );
    }
  }

  // response
  res.status(200).json({ user: user, message: "User data created successful" });
});

/**
 * @description Account Activation By Otp
 * @method POST
 * @route /api/v1/auth/account-activation-by-otp/:token
 * @access public
 */
export const accountActivationByOtp = asyncHandler(async (req, res) => {
  //Get token
  const { token } = req.params;

  //Get Otp
  const { otp } = req.body;

  //Token String To Dot
  const activationToken = stringsToDots(token);

  //Verify Token
  const verifyToken = jwt.verify(
    activationToken,
    process.env.ACCOUNT_ACTIVATION_SECRET
  );

  //Check Token Validity
  if (!verifyToken) {
    return res.status(400).json({ message: "Invalid Token" });
  }

  //User Activation
  let activateUser = null;

  if (isEmail(verifyToken.auth)) {
    activateUser = await User.findOne({ email: verifyToken.auth });

    if (!activateUser) {
      return res.status(404).json({ message: "Email Not Found" });
    }
  } else if (isMobile(verifyToken.auth)) {
    activateUser = await User.findOne({ phone: verifyToken.auth });

    if (!activateUser) {
      return res.status(404).json({ message: "Phone Not Found" });
    }
  } else {
    return res.status(400).json({ message: "Invalid User Account" });
  }

  // Check Otp
  if (otp !== verifyToken.accessToken) {
    console.log(verifyToken);
    return res.status(400).json({ message: "Invalid Otp Code" });
  }

  //Update Activation User
  activateUser.isActivate = true;
  activateUser.accessToken = null;
  activateUser.save();

  //Clear Cookie
  res.clearCookie("activationKey");

  //Respons
  res
    .status(200)
    .json({ user: activateUser, message: "User Activated successful" });
});

/**
 * @description Account Login
 * @method POST
 * @route /api/v1/auth/login
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
  //Get Auth And Password
  const { auth, password } = req.body;

  //Validation
  if (!auth || !password) {
    return res.status(400).json({ message: "All Fields Are Required" });
  }

  //Check Login Auth Phone OR Email
  let loginUser = null;

  if (isEmail(auth)) {
    //Find Login user
    loginUser = await User.findOne({ email: auth });

    //Check User Exist OR Not Exist
    if (!loginUser) {
      return res.status(404).json({ message: "Email User Not Found" });
    }
  } else if (isMobile(auth)) {
    //Find Login user
    loginUser = await User.findOne({ phone: auth });

    //Check User Exist OR Not Exist
    if (!loginUser) {
      return res.status(404).json({ message: "Phone User Not Found" });
    }
  } else {
    return res.status(400).json({ message: "Use Mobaile OR Email" });
  }

  //Check Password
  const passwordCheck = bcrypt.compareSync(password, loginUser.password);

  if (!passwordCheck) {
    return res.status(400).json({ message: "Wrong Password" });
  }

  //Create Json Web Token
  const accessToken = jwt.sign({ auth }, process.env.ACCOUNT_LOGIN_SECRET, {
    expiresIn: "365d",
  });

  //Set Token
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  //Respons
  res.status(200).json({ user: loginUser, message: "User Login successful" });
});

/**
 * @description Get Loged In User
 * @method GET
 * @route /api/v1/auth/me
 * @access private
 */
export const getLogedInUser = asyncHandler(async (req, res) => {
  //Check Loged In User Data
  if (!req.me) {
    return res.status(404).json({ message: "Loged In User Data Not Found" });
  }

  //Respons
  res.status(200).json({ user: req.me, message: "Loged In User Found" });
});

/**
 * @description Loged Out User
 * @method POST
 * @route /api/v1/auth/logout
 * @access private
 */
export const logoutUser = asyncHandler(async (req, res) => {
  //Clear Cookie
  res.clearCookie("accessToken");

  //Respons
  res.status(200).json({ message: "Loged Out Seccessful" });
});

/**
 * @description Password Change
 * @method POST
 * @route /api/v1/auth/password-change
 * @access private
 */
export const passwordChange = asyncHandler(async (req, res) => {
  const { oldPass, newPass, confirmPass } = req.body;

  //Field validation
  if (!oldPass || !newPass || !confirmPass) {
    return res.status(400).json({ message: "All field are required" });
  }

  // compare new pass and confirm pass
  if (newPass != confirmPass) {
    return res.status(400).json({ message: "Confirm password not match" });
  }

  //Find user
  const { _id } = req.me;

  const user = await User.findById(_id);

  //Check Password
  const checkPass = bcrypt.compareSync(oldPass, user.password);
  if (!checkPass) {
    return res.status(400).json({ message: "password not match" });
  }

  //Hash new Password
  const hashPass = bcrypt.hashSync(newPass, 10);

  //Save New Password
  user.password = hashPass;
  user.save();

  //Respons
  res.status(200).json({ message: "Password Change Seccessful" });
});
/**
 * @description upload profile photo
 * @method POST
 * @route /api/v1/auth/upload-profile-photo
 * @access private
 */
export const uploadProfilePhoto = asyncHandler(async (req, res) => {
  const photo = req.file.path;

  //Upload file to cloud
  const fileData = await fileUploadToCloud(photo);

  //Get user data
  const userdata = jwt.verify(
    req.cookies.accessToken,
    process.env.ACCOUNT_LOGIN_SECRET
  );

  //Find User From Database
  const profileData = await User.findOne({ email: userdata.auth });

  //Update Profile Photo
  profileData.photo = fileData.secure_url;
  profileData.save();

  //Respons
  res
    .status(200)
    .json({ user: profileData, message: "Profile photo updated successful" });
});
