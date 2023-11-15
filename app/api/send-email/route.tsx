import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.RESEND_ACCOUNT_EMAIL!,
    subject: 'Hello World',
    react: <WelcomeTemplate name="Uzzal" />,
  });

  return NextResponse.json({});
}
