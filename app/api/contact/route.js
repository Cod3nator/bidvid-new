import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message, phone } = data;
        console.log(data);
        
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required." },
        { status: 400 }
      );
    }
const phoneString = phone.toString();
    const response = await prisma.formcontact.create({
      data: {
        name,
        email,
        message,
        phone: phoneString,
      },
    });

    return NextResponse.json({ success: true, response }, { status: 201 });
  } catch (error) {
    console.error("Error creating contact lead:", error);
    return NextResponse.json(
      { success: false, error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}
