# BoatsRemoval - Boat Removal Service Website

## Project Overview
A professional business website for boat removal services in Florida. The site features a modern design with green header and orange primary elements, multi-language support ready, and appointment booking functionality.

## Business Information
- **Company Name:** BoatsRemoval
- **Services:** Professional disposal and dismantling of boats, yachts, and catamarans
- **Service Area:** Florida (East and West Coasts)
  - East Coast: Broward, Miami-Dade, Palm Beach counties
  - West Coast: Hernando, Pasco, Pinellas, Hillsborough, Manatee, Sarasota counties
- **Contact:**
  - Email: quote@boatsremoval.com
  - Phone: 779-220-0187
  - Office Addresses:
    - 201 Seminole St., Clearwater, FL 33755
    - 4470 Anglers Ave, Fort Lauderdale, FL 33312

## Technical Stack
- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Express
- **Styling:** Tailwind CSS with custom theme
- **UI Components:** Shadcn/ui
- **Forms:** React Hook Form with Zod validation
- **Email:** Resend API integration

## Key Features
1. **Multi-page Website**
   - Home page with hero section, services, pricing, FAQ
   - Quote/pricing page with multi-step form
   
2. **Quote Request System**
   - Multi-step form collecting:
     - Customer info (name, contact)
     - Boat details (size, engine type)
     - Location (full address)
     - Optional boat images (up to 3, max 10MB each)
   - All quote requests sent via email to quote@boatsremoval.com
   
3. **Image Upload & Processing**
   - Supports up to 3 images per quote request
   - Maximum 10MB per image (validated client-side)
   - Automatic image compression:
     - Resizes to max 1920x1920px
     - Converts to JPEG format with 0.8 quality
     - Significantly reduces file size for faster uploads
   - Images sent as email attachments via Resend API
   
4. **Email Integration**
   - Uses Resend API for reliable email delivery
   - API key stored in RESEND_API_KEY secret
   - Sends formatted HTML emails with all quote details
   - Images attached to emails for review
   - Reply-to set to customer's email for easy responses

5. **Design System**
   - Primary color: Orange (#FF6B35)
   - Secondary color: Green (header and "Call Now" button)
   - Responsive design (mobile, tablet, desktop)
   - Professional business aesthetic

## Environment Variables
- `RESEND_API_KEY` - API key for Resend email service
- `QUOTE_EMAIL` - Email address to receive quote notifications (defaults to test account email)
- `SESSION_SECRET` - Session management secret

## Email Setup Notes

### Current Configuration (Test Mode)
The system is currently configured with a Resend test account that has restrictions:
- Emails can only be sent to the account owner's email (serkormik@gmail.com)
- Uses Resend's default verified domain (onboarding@resend.dev) as sender

### For Production Use
To send emails to quote@boatsremoval.com:

1. **Verify Your Domain in Resend:**
   - Go to https://resend.com/domains
   - Add and verify boatsremoval.com domain
   - Follow DNS verification steps

2. **Update Email Configuration:**
   - Set `QUOTE_EMAIL` environment variable to `quote@boatsremoval.com`
   - Update `from` address in `server/email.ts` to use your verified domain
   - Example: `noreply@boatsremoval.com`

3. **Alternative: Use Resend Production Plan**
   - Upgrade to a paid Resend plan
   - This removes test account restrictions

## Project Structure
```
client/
  src/
    pages/          - Route pages (Home, Quote)
    components/     - Reusable components (Header, Footer, etc.)
    lib/            - Utilities and query client
server/
  routes.ts         - API endpoints
  email.ts          - Email sending utility
  storage.ts        - Storage interface
shared/
  schema.ts         - Shared types and validation schemas
```

## API Endpoints
- `POST /api/quote` - Submit quote request (sends email notification)

## Running the Project
```bash
npm run dev
```
The application runs on port 5000 and serves both frontend and backend.

## Important Notes
- Email integration requires valid Resend API key
- Quote forms validate all required fields before submission
- Images are optional but recommended for faster quotes
- All navigation follows Florida service area structure
