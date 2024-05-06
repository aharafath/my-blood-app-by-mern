import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { isEmail, isMobile } from "../helpers/helpers.js";
import User from "../models/User.js";

//Create Token Varify Middlewer
const tokenVarify = (req, res, next) => {
  //Get Access Token
  const accessToken = req.cookies.accessToken;

  //Check Acces Token
  if (!accessToken) {
    return res.status(400).json({ message: "Unauthorized Member" });
  }

  //Varify Access Token
  jwt.verify(
    accessToken,
    process.env.ACCOUNT_LOGIN_SECRET,
    asyncHandler(async (error, decode) => {
      if (error) {
        return res.status(400).json({ message: "Invalid Token" });
      }

      //Get Login User Data
      let me = null;

      //Check Auth Mobile Or Email
      if (isEmail(decode.auth)) {
        me = await User.findOne({ email: decode.auth }).select("-password");
      } else if (isMobile(decode.auth)) {
        me = await User.findOne({ phone: decode.auth }).select("-password");
      }

      req.me = me;

      next();
    })
  );
};

//Export Default
export default tokenVarify;
