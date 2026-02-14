/**
 * Airtable RSVP Service
 *
 * Setup Instructions:
 * 1. Create a free Airtable account at airtable.com
 * 2. Create a new base called "Wedding RSVP"
 * 3. Create a table with these fields:
 *    - Name (Single line text)
 *    - Email (Email)
 *    - Phone (Phone number)
 *    - Guest_Count (Number)
 *    - Event (Single select: Engagement, Shaadi, Valima)
 *    - Submitted_At (Created time)
 * 4. Go to https://airtable.com/create/tokens
 * 5. Create a personal access token with scope "data.records:write"
 * 6. Copy your Base ID from the API documentation
 * 7. Create a .env file with:
 *    VITE_AIRTABLE_API_KEY=your_token_here
 *    VITE_AIRTABLE_BASE_ID=your_base_id_here
 */

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = 'RSVP_Responses';

// Fallback to Google Sheets if Airtable is not configured
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export const submitRSVP = async (formData) => {
  const { name, email, phone, guestCount, event, attendees, groupName, message } = formData;

  // Determine values based on input type (single vs group)
  let finalName = name;
  let finalGuestCount = guestCount;

  if (attendees && attendees.length > 0) {
    // Format Name as comma-separated list of attendees for the Name field
    // This allows the host to see exactly who is coming within the existing "Name" field constraint
    finalName = attendees.map(a => a.name).join(', ');
    finalGuestCount = attendees.length;
  }

  // Try Airtable first
  if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              Name: finalName,
              Email: email,
              Phone: phone,
              Guest_Count: parseInt(finalGuestCount),
              Event: event,
              Message: message, // Optional field
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Airtable API request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Airtable error:', error);
      // Fall through to Google Sheets
    }
  }

  // Fallback to Google Sheets
  if (GOOGLE_SHEETS_URL) {
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires this
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: finalName,
          email,
          phone,
          guestCount: parseInt(finalGuestCount),
          event,
          message,
          attendees: attendees || [], // Send full structure to sheets if it supports it
          timestamp: new Date().toISOString(),
        }),
      });

      // no-cors mode doesn't allow reading response, so we assume success
      return { success: true };
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw error;
    }
  }

  // If neither backend is configured, log to console for development
  console.log('RSVP Submission (No backend configured):', {
    finalName,
    email,
    phone,
    finalGuestCount,
    event,
    attendees,
    timestamp: new Date().toISOString(),
  });

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, demo: true };
};
