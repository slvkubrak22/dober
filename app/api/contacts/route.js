

import { transporter } from "@/app/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    const data = await req.json();

    const { name, phone, email, comment } = data;

    await transporter.sendMail(
        {
            from: email,
            to: "slvkubrak@gmail.com",
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
                // res.status(500).send({ error });
            } else {
                const message = `Email sent: ${info.response}`;
                console.log(message);
                // res.status(200).send(message);
            }
        }
    );

    return NextResponse.json({ res });

}