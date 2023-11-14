import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({
    where: { email: validation.data.email },
  });
  if (user)
    return NextResponse.json({ error: 'Email already exist' }, { status: 400 });

  const hashedPassword = await bcrypt.hash(validation.data.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: validation.data.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ id: newUser.id, email: newUser.email });
}
