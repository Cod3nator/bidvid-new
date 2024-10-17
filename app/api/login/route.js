import { NextResponse } from "next/server";
import db from "../../config/db.js";


export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    if (!body.email || !body.password) {
      return new Response(JSON.stringify({ success: false, message: "Missing email or password" }), {
        status: 400,
      });
    }

    const user = {
      email: body.email,
      password: body.password,
    };

    const query = `SELECT * FROM users WHERE email = ?`;
    const values = [user.email];

    const userExists = await new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          console.error("Error checking user:", err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (userExists.length === 0) {
      return new Response(JSON.stringify({ success: false, message: "User not found" }), {
        status: 404,
      });
    }

    const hashedPassword = userExists[0].password;

    const isMatch = user.password === hashedPassword; // Use bcrypt to compare passwords
    if (!isMatch) {
      return new Response(JSON.stringify({ success: false, message: "Invalid password" }), {
        status: 401,
      });
    }

    return NextResponse.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}