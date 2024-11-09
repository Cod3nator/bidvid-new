import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request) {
  // const token = request.headers.get('Authorization')?.split(' ')[1]; 

  // if (!token) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const userDetail = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    
    if (!userDetail) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Access granted', user: userDetail });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}
