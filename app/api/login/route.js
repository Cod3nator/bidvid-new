import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import pool from "../../lib/db.js";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION;

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const [rows] = await pool.execute(
      "SELECT * FROM User WHERE email = ?",
      [email]
    );
    
    const user = rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const sessionToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: String(JWT_EXPIRATION),
    });
    const refreshToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: String(REFRESH_TOKEN_EXPIRATION),
    });

    await pool.execute(
      "INSERT INTO RefreshToken (userId, token) VALUES (?, ?)",
      [email, refreshToken]
    );
      const userData = {
        "name":user.name,
        "email":user.email,
        "user_id":user.user_id
      } 
    return NextResponse.json(
      { success: true, message: "Login successful", sessionToken, refreshToken},
      { status: 200 }
    );

  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { success: false, message: `Internal server error, ${error}` },
      { status: 500 }
    );
  }
}
