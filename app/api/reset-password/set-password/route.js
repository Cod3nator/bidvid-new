import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// POST handler to update password
export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { email ,password } = body;

    if (!password) {
      return new NextResponse(
        JSON.stringify({ message: "Password is required", success: false }),
        { status: 400 }
      );
    }

   
    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password in the database
    await prisma.user.update({
      where: { email},
      data: { password: hashedPassword },
    });

    return new NextResponse(
      JSON.stringify({ message: "Password updated", success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "An error occurred", success: false }),
      { status: 500 }
    );
  }
}
