import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" ,success:false,message: "User with this email already exists" },
        { status: 400 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          user_id: userId,
          password: hashedPassword,
        },
      });

      const sessionToken = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
      });
      const refreshToken = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRATION,
      });

      await prisma.refreshToken.create({
        data: {
          userId: newUser.id,
          token: refreshToken,
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: "User created successfully",
          sessionToken,
          refreshToken,
          user: newUser,
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
