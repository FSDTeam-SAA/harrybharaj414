import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request:Request) {
  try {
    const body = await request.json();
    const { firstName, LastName, email, phone, message, services } = body;

    //   array convert list 
    const serviceList =
      Array.isArray(services) && services.length > 0
        ? services.map((item) => `<li>${item}</li>`).join("")
        : "<li>No services selected</li>";

    //  Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    //  Email content
    const mailOptions = {
      from: process.env.SMTP_USER, 
      to: process.env.SMTP_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${LastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Services:</strong></p>
        <ul>${serviceList}</ul>
      `,
    };


    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
