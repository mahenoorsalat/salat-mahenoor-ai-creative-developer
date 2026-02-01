import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
    return NextResponse.json({ message: 'Contact API is working' });
}

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to Mahenoor (Owner)
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `🚀 New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
                    <div style="text-align: center; padding-bottom: 20px;">
                        <h2 style="color: #6366f1; margin: 0;">New Inquiry</h2>
                        <p style="color: #666; font-size: 14px;">You have received a new message from your portfolio site.</p>
                    </div>
                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 0;"><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; color: #374151; font-style: italic;">${message}</p>
                    </div>
                    <div style="text-align: center; color: #9ca3af; font-size: 12px;">
                        <p>This email was sent from your portfolio website's contact form.</p>
                    </div>
                </div>
            `,
        };

        // Thank you Email to User (Sender)
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank you for reaching out, ${name}!`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
                    <div style="text-align: center; padding-bottom: 20px;">
                        <h2 style="color: #6366f1; margin: 0;">Message Received!</h2>
                    </div>
                    <div style="padding: 20px; line-height: 1.6; color: #374151;">
                        <p>Hi <strong>${name}</strong>,</p>
                        <p>Thank you for getting in touch through my portfolio. I've received your message and will review it as soon as possible.</p>
                        <p>I typically respond within 24-48 hours. Looking forward to potentially working together!</p>
                        <p style="margin-top: 30px;">Best Regards,<br /><strong>Salat Mahenoor</strong></p>
                    </div>
                    <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; text-align: center;">
                         <p style="font-size: 14px; color: #666; margin-bottom: 5px;">Follow me on social media:</p>
                        <a href="https://github.com/mahenoorsalat" style="color: #6366f1; text-decoration: none; margin: 0 10px;">GitHub</a>
                        <a href="https://www.linkedin.com/in/salat-mahenoor" style="color: #6366f1; text-decoration: none; margin: 0 10px;">LinkedIn</a>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(ownerMailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
