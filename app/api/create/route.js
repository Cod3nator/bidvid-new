// Example API route using db.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import pool from "../../lib/db.js"; 

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION; 
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION;

export async function POST(req) {
  try {
    const { name, email, password, userId } = await req.json();

    if (!name || !email || !password || !userId) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    
    const [existingUser] = await pool.execute(
      "SELECT * FROM User WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "User with this email already exists", success: false, message: "User with this email already exists" },
        { status: 400 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const [newUserResult] = await pool.execute(
        "INSERT INTO User (name, email, userId, password) VALUES (?, ?, ?, ?)",
        [name, email, userId, hashedPassword]
      );

      const newUserId = newUserResult.insertId;

      const sessionToken = jwt.sign({ userId: newUserId }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
      });
      const refreshToken = jwt.sign({ userId: newUserId }, JWT_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRATION,
      });

      await pool.execute(
        "INSERT INTO RefreshToken (userId, token) VALUES (?, ?)",
        [email, refreshToken]
      );

      return NextResponse.json(
        {
          success: true,
          message: "User created successfully",
          sessionToken,
          refreshToken,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error handling request:", error);

    return NextResponse.json(
      { success: false, message: "Error processing request" },
      { status: 500 }
    );
  }
}
