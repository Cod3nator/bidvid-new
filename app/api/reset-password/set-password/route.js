import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import pool from "../../../lib/db.js"; 
export async function PUT(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!password) {
      return new NextResponse(
        JSON.stringify({ message: "Password is required", success: false }),
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.execute(
      "UPDATE User SET password = ? WHERE email = ?",
      [hashedPassword, email]
    );

    if (result.affectedRows === 0) {
      return new NextResponse(
        JSON.stringify({ message: "User not found", success: false }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Password updated", success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating password:", error);
    return new NextResponse(
      JSON.stringify({ message: "An error occurred", success: false }),
      { status: 500 }
    );
  }
}
