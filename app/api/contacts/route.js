import { transporter } from "@/app/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    const data = await req.json();

    const { name, phone, email, comment } = data;

    await transporter.sendMail(
        {
            from: email,
            to: "support@dober.chat",
            // to: "slvkubrak@gmail.com",
            text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Comment: ${comment}
          `,
        },
        function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send({ error });
            } else {
                const message = `Email sent: ${info.response}`;
                console.log(message);
                res.status(200).send(message);
            }
        }
    );

    return NextResponse.json({ res });

}





// import { transporter } from "@/app/lib/mailer";
// import { NextResponse } from "next/server";

// export async function POST(req, res) {

//     const data = await req.json();

//     const { name, phone, email, comment } = data;

//     await transporter.sendMail(
//         {
//             from: email,
//             to: "support@dober.chat",
//             text: `
//             Name: ${name}
//             Email: ${email}
//             Phone: ${phone}
//             Comment: ${comment}
//           `,
//         },
//         function (error, info) {
//             if (error) {
//                 console.log(error);
//                 res.status(500).send({ error });
//             } else {
//                 const message = `Email sent: ${info.response}`;
//                 console.log(message);
//                 res.status(200).send(message);
//             }
//         }
//     );

//     return NextResponse.json({ res });

// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// import { transporter } from "@/app/lib/mailer";
// import { NextResponse } from "next/server";

// export async function POST(req, res) {

//     const data = await req.json();

//     const { name, phone, email, comment } = data;

//     const tmp = await transporter.sendMail(
//         {
//             from: email,
//             to: "support@dober.chat",
//             text: `
//             Name: ${name}
//             Email: ${email}
//             Phone: ${phone}
//             Comment: ${comment}
//           `,
//         },
//         function (error, info) {
//             if (error) {
//                 console.log(error);
//                 res.status(500).send({ error });
//             } else {
//                 const message = `Email sent: ${info.response}`;
//                 console.log(message);
//                 res.status(200).send(message);
//             }
//         }
//     );

//     return NextResponse.json({ tmp });

// }


///////////////////////////////////////////////////////////////


// const nodemailer = require("nodemailer");

// export default async (req, res) => {

// const { name, phone, email, comment } = JSON.parse(req.body);

// const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.ionos.com",
//     auth: {
//         user: "webrequest@dober.chat",
//         pass: "Str0ngP@ssw0rdforWebRequests!",
//     },
//     secure: true,
// });

// await new Promise((resolve, reject) => {
//     // verify connection configuration
//     transporter.verify(function (error, success) {
//         if (error) {
//             console.log(error);
//             reject(error);
//         } else {
//             console.log("Server is ready to take our messages");
//             resolve(success);
//         }
//     });
// });

// const mailData = {
//     from: {
//         name: `${name} ${phone}`,
//         address: "myEmail@gmail.com",
//     },
//     replyTo: email,
//     to: "recipient@gmail.com",
//     subject: `form message`,
//     text: comment,
//     html: `${comment}`,
// };

// await new Promise((resolve, reject) => {
//     // send mail
//     transporter.sendMail(mailData, (err, info) => {
//         if (err) {
//             console.error(err);
//             reject(err);
//         } else {
//             console.log(info);
//             resolve(info);
//         }
//     });
// });

// res.status(200).json({ status: "OK" });
// };