import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import pool from '../../lib/db.js';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request) {


  const token = request.headers.get('Authorization')?.split(' ')[1]; 

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const [userDetail] = await pool.execute(
      "SELECT * FROM User WHERE id = ?",
      [decoded.userId]
    );
const user = {
  "name": userDetail[0].name,
  "email": userDetail[0].email,
  "userId": userDetail[0].userId
};

    if (userDetail.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Access granted', user: user });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token',message:error }, { status: 403 });
  }
}
