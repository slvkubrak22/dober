const nodemailer = require("nodemailer");
const senderEmail = "webrequest@dober.chat";

export const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.ionos.com",
  port: "465",
  secure: true,
  auth: {
    user: senderEmail,
    pass: "Str0ngP@ssw0rdforWebRequests!",
  },
});