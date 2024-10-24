import { prisma } from "../../lib/prisma"; // Assuming Prisma is used for DB
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'; // For sending emails

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a password reset token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    // Send email with the reset link
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset',
      text: `Click here to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        return res.status(200).json({ message: 'Reset link sent' });
      }
    });
  }
}
