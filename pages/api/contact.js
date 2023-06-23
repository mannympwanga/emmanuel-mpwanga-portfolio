import nodemailer from "nodemailer"
import { env } from "node:process";

export default async function ContactAPI(req, res) {
    const { name, surname, email, message } = req.body

    const data = {
        name, surname, email, message
    }
        ;


    const user = "empwanga20@gmail.com";
    const pass = "bzapicybedjpnvbx";


    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.surname || !data.email || !data.message) {
            return res.status(400).json({ message: "Bad request" })
        }
    }


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: pass,
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: user,
            to: 'empwanga20@gmail.com',
            replyTo: data.email,
            subject: 'Contact Form submission from',
            html: `
            <p>Name: ${data.name}</p> 
            <p>Surname: ${data.surname}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>`
            ,
        });

        console.log("Message sent:", mail.messageId)
        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Could not send the email. Your message was not sent."
        })
    }
}