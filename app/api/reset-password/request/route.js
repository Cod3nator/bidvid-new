import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req) {
  try {
   
    const body = await req.json();
    const { email } = body;  

    if (!email) {
      return new NextResponse(
        JSON.stringify({ message: "Email is required", success: false }),
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user) {
      return new NextResponse(
        JSON.stringify({ message: "User exists", success: true }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "User does not exist", success: false }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "An error occurred", success: false }),
      { status: 500 }
    );
  }
}
