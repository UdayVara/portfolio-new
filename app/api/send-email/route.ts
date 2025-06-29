// app/api/send-email/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, message, subject } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "learnandgrow9092@gmail.com",
        pass: "ppis bznu blsb pbcs", // App password
      },
    })

    await transporter.sendMail({
      from: email,
      to: "varaudayd@gmail.com",
      subject: `Portfolio Contact from ${name} - (${subject})`,
      text: message,
      replyTo: email
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
