# Shaheer & Amna's Wedding Website 💍

A beautiful, responsive wedding website built with React, featuring event details, countdown timer, and RSVP functionality.

## ✨ Features

- **Elegant Design**: Romantic soft color palette with Islamic/South Asian cultural elements
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **RSVP System**: Integrated with Airtable for easy guest management
- **Multiple Events**: Engagement (detailed), Shaadi, and Valima (placeholders for 2027)
- **Countdown Timer**: Real-time countdown to the engagement date
- **Google Maps**: Embedded venue location with directions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- A free Airtable account (for RSVP storage)

### Installation

1. **Install dependencies** (already done)
   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Airtable credentials (see Airtable Setup below)

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5173`

## 📊 Airtable Setup

### Step 1: Create Airtable Base

1. Go to [airtable.com](https://airtable.com) and sign up for a free account
2. Click "Create a base" → "Start from scratch"
3. Name it "Wedding RSVP"

### Step 2: Create Table Structure

Create a table called `RSVP_Responses` with these fields:

| Field Name     | Field Type       | Options                          |
|----------------|------------------|----------------------------------|
| Name           | Single line text | -                                |
| Email          | Email            | -                                |
| Phone          | Phone number     | -                                |
| Guest_Count    | Number           | Integer, no decimals             |
| Event          | Single select    | Engagement, Shaadi, Valima       |
| Submitted_At   | Created time     | -                                |

### Step 3: Get API Credentials

1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Click "Create new token"
3. Name it "Wedding Website"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write`
5. Add access to your "Wedding RSVP" base
6. Click "Create token" and copy it

### Step 4: Get Base ID

1. Go to [airtable.com/api](https://airtable.com/api)
2. Select your "Wedding RSVP" base
3. Find the Base ID in the introduction (starts with `app...`)

### Step 5: Update Environment Variables

Create a `.env` file in the project root:

```env
VITE_AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

## 🌐 Deployment to Vercel

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
   - Add environment variables:
     - `VITE_AIRTABLE_API_KEY`
     - `VITE_AIRTABLE_BASE_ID`
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

3. **Add environment variables**
   ```bash
   vercel env add VITE_AIRTABLE_API_KEY
   vercel env add VITE_AIRTABLE_BASE_ID
   ```

4. **Redeploy with environment variables**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

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
│   │   └── airtable.js           # Airtable API integration
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── tailwind.config.js            # Tailwind configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

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

## 📱 Testing RSVP

### Development Mode (No Backend)

If no Airtable credentials are configured, RSVPs will:
- Still validate forms
- Show success message
- Log data to browser console (for testing)

### Production Mode

With Airtable configured:
- RSVPs are saved to your Airtable base
- View responses in real-time in Airtable
- Export to CSV/Excel for planning

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Working

- Make sure `.env` file is in the project root
- Restart development server after changing `.env`
- Variables must start with `VITE_` prefix
- Don't commit `.env` to version control

### RSVP Not Submitting

1. Check browser console for errors
2. Verify Airtable API key and Base ID
3. Check Airtable token has correct permissions
4. Verify table name is exactly `RSVP_Responses`

## 📊 View RSVP Responses

1. Log in to [airtable.com](https://airtable.com)
2. Open your "Wedding RSVP" base
3. View all responses in a sortable table
4. Create views to filter by event
5. Export to CSV for guest list management

## 🔒 Security

- Never commit `.env` file to Git
- `.env` is in `.gitignore` by default
- Airtable API keys are environment variables
- No sensitive data in client-side code

## 📞 Support

For issues or questions:
- Check this README
- Review Airtable documentation
- Check Vercel deployment logs

## 📝 License

© 2026 Shaheer Khan & Amna Sharif. All Rights Reserved.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
