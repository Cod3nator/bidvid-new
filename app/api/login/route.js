import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION; 
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION; 

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { success: false ,message: "Invalid email or password" },
        { status: 401 }
      );
    } else {
      const sessionToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: String(JWT_EXPIRATION),
      });
      const refreshToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: String(REFRESH_TOKEN_EXPIRATION),
      });

      await prisma.refreshToken.create({
        data: {
          userId: user.id,
          token: refreshToken,
        },
      });

      return NextResponse.json(
        { success: true, message: "Login successful",sessionToken, refreshToken, user  },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
