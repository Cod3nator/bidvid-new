import { NextResponse } from "next/server"
import db from "../../config/db.js";
import { v4 as uuidv4 } from 'uuid'; 
import moment from 'moment';


export async function POST(req) {
    try {
        const body = await req.json(); 

        const user = {
            id: uuidv4(), 
            name: body.name,
            email: body.email,
            user_id: body.userId, 
            password: body.password,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
        };

        // Corrected SQL query
        const query = `
            INSERT INTO users (name, email, user_id, password, created_at)
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [
            user.name,
            user.email,
            user.user_id,
            user.password,
            user.created_at, // Include createdAt
        ];

        // db.query(query, values, (err, result) => {
        //     if (err) {
        //         console.error('Error inserting user:', err);
        //         return new Response(JSON.stringify({success: false, error: 'Error inserting user' }), {
        //             status: 500,
        //         });
        //     }
        //     // console.log('User inserted successfully:', result);
        // });

        return new Response(JSON.stringify({success: true, message: 'User created successfully' }), {
            status: 201,
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return new Response(JSON.stringify({ error: 'Error processing request' }), {
            status: 500,
        });
    }
}