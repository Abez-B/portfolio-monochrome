import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Handle CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send notification email to you
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Will use Resend's domain for testing
            to: 'bharathjp02@gmail.com',
            replyTo: email,
            subject: `New Portfolio Contact from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        // Send auto-reply acknowledgement to the visitor
        await resend.emails.send({
            from: 'Bharath Kumar <onboarding@resend.dev>', // Will use Resend's domain for testing
            to: email,
            subject: `Thanks for reaching out, ${name}!`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hi ${name},</h2>
          <p>Thank you for contacting me through my portfolio! I've received your message:</p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 16px; margin: 20px 0; color: #666;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>I'll review it and get back to you as soon as possible.</p>
          <p>Best regards,<br><strong>Bharath Kumar</strong></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            Email: bharathjp02@gmail.com<br>
            LinkedIn: <a href="https://www.linkedin.com/in/bharath-kumarjp02">linkedin.com/in/bharath-kumarjp02</a>
          </p>
        </div>
      `,
        });

        return res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending emails:', error);
        return res.status(500).json({ error: 'Failed to send emails' });
    }
}
