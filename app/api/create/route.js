import { NextResponse } from "next/server";
import db from "../../config/db.js";
import { v4 as uuidv4 } from 'uuid'; 
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const body = await req.json(); 
        
        if (!body.name || !body.email || !body.password || !body.userId) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);
        
        const user = {
            id: uuidv4(), 
            name: body.name,
            email: body.email,
            user_id: body.userId, 
            password: hashedPassword,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        };

        const query = `
            INSERT INTO users (name, email, user_id, password, created_at)
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [
            user.name,
            user.email,
            user.user_id,
            user.password,
            user.created_at, 
        ];

        const result = await new Promise((resolve, reject) => {
            db.query(query, values, (err, result) => {
                if (err) {
                    console.error('Error inserting user:', err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        return NextResponse.json({ success: true, message: 'User created successfully' }, { status: 201 });

    } catch (error) {
        console.error('Error handling request:', error);

        return NextResponse.json({ success: false, message: 'Error processing request' }, { status: 500 });
    }
}
