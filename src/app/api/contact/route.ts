import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;
    
    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill out all fields' },
        { status: 400 }
      );
    }
    
    // Here you would typically send an email
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', { name, email, message });
    
    // In a real implementation, you would use a service like SendGrid, AWS SES, or Nodemailer
    // Example with SendGrid would be:
    // await sendEmail({
    //   to: 'hemchanna@go.byuh.edu',
    //   from: 'your-website@example.com',
    //   subject: `New contact from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });
    
    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'There was an error sending your message. Please try again later.' },
      { status: 500 }
    );
  }
} 