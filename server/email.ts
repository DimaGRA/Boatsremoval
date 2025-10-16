import { Resend } from 'resend';
import type { QuoteRequest } from '@shared/schema';

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
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Boats Removal <noreply@boatsremoval.com>',
      to: ['quote@boatsremoval.com'],
      subject: `New Quote Request - ${quoteData.firstName} ${quoteData.lastName}`,
      html: emailContent,
      replyTo: quoteData.email,
    });

    if (error) {
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
