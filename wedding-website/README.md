# Shaheer & Amna's Wedding Website

A beautiful, responsive wedding website built with React, featuring event details, countdown timer, and RSVP functionality.

## Features

- **Elegant Design**: Romantic soft color palette with Islamic/South Asian cultural elements
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **RSVP System**: Integrated with Google Sheets for easy guest management
- **Multiple Events**: Engagement (detailed), Shaadi, and Valima (placeholders for 2027)
- **Countdown Timer**: Real-time countdown to the engagement date
- **Google Maps**: Embedded venue location with directions

## Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- A Google account (for RSVP storage via Google Sheets)

### Installation

1. **Install dependencies** (already done)
   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Google Script URL (see Google Sheets Setup below)

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5173`

## Google Sheets RSVP Setup

### Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it "Wedding RSVP"
3. In **Row 1**, add these column headers:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Guest_Count | Event | Side | Group_Name | Message |

### Step 2: Deploy the Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the entire contents of `google-apps-script.js` from this repo
4. Click **Deploy > New deployment**
5. Click the gear icon and select **Web app**
6. Set **Execute as**: "Me"
7. Set **Who has access**: "Anyone"
8. Click **Deploy**
9. Authorize when prompted (click "Advanced" > "Go to ... (unsafe)" if needed)
10. **Copy the Web App URL** — it looks like `https://script.google.com/macros/s/XXXX/exec`

### Step 3: Update Environment Variables

For **local development**, create a `.env` file:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

For **Vercel production**:

1. Go to your Vercel project dashboard
2. Settings > Environment Variables
3. Add: `GOOGLE_SCRIPT_URL` = your Web App URL from Step 2
4. Redeploy

## Deployment to Vercel

### Option 1: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Wedding website"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable:
     - `GOOGLE_SCRIPT_URL` = your Apps Script Web App URL
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variable**
   ```bash
   vercel env add GOOGLE_SCRIPT_URL
   ```

4. **Redeploy with environment variables**
   ```bash
   vercel --prod
   ```

## Project Structure

```
wedding-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx        # Navigation header
│   │   │   └── Footer.jsx        # Footer with couple info
│   │   ├── home/
│   │   │   ├── Hero.jsx          # Hero section with names
│   │   │   └── Countdown.jsx     # Countdown timer
│   │   ├── events/
│   │   │   ├── EventTabs.jsx     # Event navigation
│   │   │   ├── EngagementDetails.jsx  # Full engagement info
│   │   │   └── EventPlaceholder.jsx   # Shaadi/Valima placeholder
│   │   ├── rsvp/
│   │   │   ├── RSVPForm.jsx      # RSVP form with validation
│   │   │   └── RSVPModal.jsx     # Modal wrapper for form
│   │   └── ui/
│   │       ├── Button.jsx        # Reusable button component
│   │       ├── Card.jsx          # Card component
│   │       └── FloralDecoration.jsx  # Floral decorations
│   ├── pages/
│   │   ├── Home.jsx              # Home page
│   │   └── Events.jsx            # Events page
│   ├── services/
│   │   └── googleSheets.js       # Google Sheets API integration
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind
├── api/
│   └── rsvp.js                   # Vercel serverless function
├── google-apps-script.js         # Apps Script code (copy to Google)
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── tailwind.config.js            # Tailwind configuration
└── package.json                  # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  blush: { ... },    // Pink tones
  sage: { ... },     // Green tones
  lavender: { ... }, // Purple tones
  gold: '#D4AF37',   // Accent
  deepRose: '#C08B8E', // Primary
}
```

### Fonts

The website uses:
- **Cormorant Garamond** for headings
- **Montserrat** for body text
- **Great Vibes** for script/names

Change fonts in `src/index.css`

### Event Details

Update event information in:
- `src/components/home/Countdown.jsx` (date/time)
- `src/components/events/EngagementDetails.jsx` (venue, timeline, dress code)

## Testing RSVP

### Development Mode (No Backend)

If no Google Script URL is configured, RSVPs will:
- Still validate forms
- Show an error message about missing configuration
- Log data to browser console (for testing)

### Production Mode

With Google Sheets configured:
- RSVPs are saved to your Google Sheet in real-time
- View responses directly in Google Sheets
- Use Google Sheets filters, charts, and export features

## Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Working

- Make sure `.env` file is in the project root
- Restart development server after changing `.env`
- `GOOGLE_SCRIPT_URL` should NOT have `VITE_` prefix (it's server-side only)
- Don't commit `.env` to version control

### RSVP Not Submitting

1. Check browser console for errors
2. Verify `GOOGLE_SCRIPT_URL` is set in Vercel
3. Make sure Apps Script is deployed as "Anyone" access
4. Test the Apps Script URL directly with a GET request (should return `{"status":"RSVP endpoint is running"}`)

### Apps Script Authorization Issues

If you see authorization errors:
1. Open the Apps Script editor
2. Run `doGet` function manually once (click Run button)
3. Authorize the permissions when prompted
4. Redeploy

## View RSVP Responses

1. Open your "Wedding RSVP" Google Sheet
2. All responses appear as new rows with timestamps
3. Use Data > Create a filter to sort/filter by event
4. Use File > Download to export as CSV/Excel

## Security

- Never commit `.env` file to Git
- `.env` is in `.gitignore` by default
- Google Script URL is a server-side environment variable
- No sensitive data in client-side code

## Support

For issues or questions:
- Check this README
- Review Google Apps Script documentation
- Check Vercel deployment logs

## License

(c) 2026 Shaheer Khan & Amna Sharif. All Rights Reserved.

---

**Built with React, Tailwind CSS, and Framer Motion**
