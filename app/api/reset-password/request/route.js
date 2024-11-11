import { NextResponse } from "next/server";
import pool from "../../../lib/db.js"; 

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

    // Check if the user exists in the database
    const [rows] = await pool.execute(
      "SELECT * FROM User WHERE email = ?",
      [email]
    );
    
    const user = rows[0];

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
    console.error("Error checking user:", error);
    return new NextResponse(
      JSON.stringify({ message: "An error occurred", success: false }),
      { status: 500 }
    );
  }
}
