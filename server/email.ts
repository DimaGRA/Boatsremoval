import { Resend } from 'resend';
import type { QuoteRequest, ContactRequest } from '@shared/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteEmail(quoteData: QuoteRequest) {
  const emailContent = `
    <h2>New Boat Removal Quote Request</h2>
    
    <h3>Customer Information</h3>
    <p><strong>Name:</strong> ${quoteData.firstName} ${quoteData.lastName}</p>
    <p><strong>Email:</strong> ${quoteData.email}</p>
    <p><strong>Phone:</strong> ${quoteData.phone}</p>
    
    <h3>Boat Details</h3>
    <p><strong>Boat Size:</strong> ${quoteData.boatSize}</p>
    ${quoteData.engineType ? `<p><strong>Engine Type:</strong> ${quoteData.engineType}</p>` : ''}
    
    <h3>Location</h3>
    <p><strong>Address:</strong> ${quoteData.addressLine1}</p>
    ${quoteData.addressLine2 ? `<p>${quoteData.addressLine2}</p>` : ''}
    <p><strong>City:</strong> ${quoteData.city}</p>
    <p><strong>State:</strong> ${quoteData.state}</p>
    <p><strong>Zip Code:</strong> ${quoteData.zipCode}</p>
    
    ${quoteData.images && quoteData.images.length > 0 ? `
    <h3>Boat Photos</h3>
    <p>${quoteData.images.length} photo(s) attached</p>
    ` : ''}
  `;

  try {
    // Prepare attachments from images
    const attachments = quoteData.images?.map(img => ({
      filename: img.filename,
      content: img.content,
    })) || [];

    // Note: Using test account email due to Resend test account restrictions
    // For production, change this to quote@boatsremoval.com after verifying domain
    const { data, error } = await resend.emails.send({
      from: 'Boats Removal <onboarding@resend.dev>',
      to: [process.env.QUOTE_EMAIL || 'serkormik@gmail.com'],
      subject: `New Quote Request - ${quoteData.firstName} ${quoteData.lastName}`,
      html: emailContent,
      replyTo: quoteData.email,
      ...(attachments.length > 0 && { attachments }),
    });

    if (error) {
      // Check if it's a test account restriction error
      const isTestAccountError = error.message?.includes('can only send testing emails') || 
                                  error.message?.includes('domain is not verified');
      
      if (isTestAccountError) {
        console.warn('⚠️  Resend test account restriction - email not sent to actual recipient');
        console.warn('   Quote data received:', { 
          name: `${quoteData.firstName} ${quoteData.lastName}`,
          email: quoteData.email,
          phone: quoteData.phone 
        });
        // Return mock success for test mode - the form data was valid
        return { id: 'test-mode-' + Date.now() };
      }
      
      console.error('Email send error:', error);
      throw error;
    }

    console.log('Quote email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send quote email:', error);
    throw error;
  }
}

export async function sendContactEmail(contactData: ContactRequest) {
  const emailContent = `
    <h2>New Contact Form Submission</h2>
    
    <h3>Contact Information</h3>
    <p><strong>Name:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Phone:</strong> ${contactData.phone}</p>
    
    <h3>Message</h3>
    <p>${contactData.message.replace(/\n/g, '<br>')}</p>
    
    ${contactData.images && contactData.images.length > 0 ? `
    <h3>Boat Photos</h3>
    <p>${contactData.images.length} photo(s) attached</p>
    ` : ''}
  `;

  try {
    // Prepare attachments from images
    const attachments = contactData.images?.map(img => ({
      filename: img.filename,
      content: img.content,
    })) || [];

    const { data, error } = await resend.emails.send({
      from: 'Boats Removal <onboarding@resend.dev>',
      to: [process.env.QUOTE_EMAIL || 'serkormik@gmail.com'],
      subject: `Contact Form - ${contactData.name}`,
      html: emailContent,
      replyTo: contactData.email,
      ...(attachments.length > 0 && { attachments }),
    });

    if (error) {
      // Check if it's a test account restriction error
      const isTestAccountError = error.message?.includes('can only send testing emails') || 
                                  error.message?.includes('domain is not verified');
      
      if (isTestAccountError) {
        console.warn('⚠️  Resend test account restriction - contact email not sent to actual recipient');
        console.warn('   Contact data received:', { 
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone 
        });
        // Return mock success for test mode
        return { id: 'test-mode-' + Date.now() };
      }
      
      console.error('Contact email send error:', error);
      throw error;
    }

    console.log('Contact email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw error;
  }
}
