import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { personalInfo } from '@/data/personal';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get credentials from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailUser || !emailPass) {
      console.error('Missing email credentials in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not configured properly' 
        },
        { status: 500 }
      );
    }
    
    // Create Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });
    
    // Define email content
    const mailOptions = {
      from: `"Portfolio Website" <${emailUser}>`,
      to: personalInfo.email || emailUser, // Send to yourself
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New message from your portfolio website
          </h3>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin: 15px 0;">
              <strong>Message:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 5px; border-left: 4px solid #007bff;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    };
    
    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully: ', info.messageId);
      
      // Return success response
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! I will get back to you soon.' 
        },
        { status: 200 }
      );
    } catch (emailError: unknown) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please try again later.',
          error: emailError instanceof Error ? emailError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
    
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}