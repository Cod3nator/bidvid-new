
import pool from "../../lib/db.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message, phone } = data;
    
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required." },
        { status: 400 }
      );
    }

    const phoneString = phone ? phone.toString() : null;

    const [result] = await pool.execute(
      "INSERT INTO Formcontact (name, email, message, phone) VALUES (?, ?, ?, ?)",
      [name, email, message, phoneString]
    );

    if (result.affectedRows > 0) {
      return NextResponse.json(
        { success: true, message: "Thank you for contacting us" },
        { status: 201 }
      );
    } else {
      throw new Error("Failed to create contact record");
    }
  } catch (error) {
    console.error("Error creating contact lead:", error);
    return NextResponse.json(
      { success: false, error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}
