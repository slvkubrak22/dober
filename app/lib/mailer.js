// const nodemailer = require("nodemailer");
// const senderEmail = "slvkubrak@gmail.com";

// export const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   // host: 'smtp.gmail.com',
//   port: "465",
//   secure: true,
//   auth: {
//     user: senderEmail,
//     pass: ",fnzflvby1966",
//   },
// });

// const nodemailer = require("nodemailer");
// const senderEmail = "sale@dreamxweb.com";

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   port: "465",
//   secure: true,
//   auth: {
//     user: senderEmail,
//     pass: "rmquowjmkewebriq",
//   },
// });

const nodemailer = require("nodemailer");
const senderEmail = "webrequest@dober.chat";

export const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.ionos.com",
  port: "465",
  secure: false,
  auth: {
    user: senderEmail,
    pass: "Str0ngP@ssw0rdforWebRequests!",
  },
});