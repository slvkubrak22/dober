

const nodemailer = require("nodemailer");
const senderEmail = "slvkubrak@gmail.com";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  port: "465",
  secure: true,
  auth: {
    user: senderEmail,
    pass: "batyaadmin1488",
  },
});