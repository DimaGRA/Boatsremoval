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
     - Optional boat images (up to 3)
   - All quote requests sent via email to quote@boatsremoval.com
   
3. **Email Integration**
   - Uses Resend API for reliable email delivery
   - API key stored in RESEND_API_KEY secret
   - Sends formatted HTML emails with all quote details
   - Reply-to set to customer's email for easy responses

4. **Design System**
   - Primary color: Orange (#FF6B35)
   - Secondary color: Green (header and "Call Now" button)
   - Responsive design (mobile, tablet, desktop)
   - Professional business aesthetic

## Environment Variables
- `RESEND_API_KEY` - API key for Resend email service
- `SESSION_SECRET` - Session management secret

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
