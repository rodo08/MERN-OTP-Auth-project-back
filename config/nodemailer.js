import nodemailer from "nodemailer";

//crear transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, //aceptar certificados autofirmados, dara error si no lo pongo y solo sirve para ell tutorial porque saldra flagueado como no seguro en prod
  },
});

export default transporter;
