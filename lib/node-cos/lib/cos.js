require("dotenv").config();
const COS = require("cos-nodejs-sdk-v5");
const cos = new COS({
  SecretId: process.env.SECRET_ID,
  SecretKey: process.env.SECRET_KEY,
});

module.exports = cos;
